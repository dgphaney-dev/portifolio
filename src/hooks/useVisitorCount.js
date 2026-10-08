import { useState, useEffect } from 'react';

const COUNTER_KEY = 'dgphaney_portfolio_visitors';
const API_BASE = 'https://countapi.mileshilliard.com/api/v1';
const INITIAL_BASELINE = 89;

export function useVisitorCount() {
  const [visitorCount, setVisitorCount] = useState(() => {
    const cached = localStorage.getItem('dg_cached_visitors');
    return cached ? parseInt(cached, 10) : INITIAL_BASELINE;
  });

  useEffect(() => {
    let isMounted = true;

    async function syncCount() {
      try {
        const SESSION_KEY = 'dg_visitor_session_registered';
        const LAST_VISIT_KEY = 'dg_last_visit_timestamp';
        const now = Date.now();

        const sessionRegistered = sessionStorage.getItem(SESSION_KEY);
        const lastVisit = localStorage.getItem(LAST_VISIT_KEY);

        // Considera nova visita única se a sessão ainda não foi registrada
        // e se passaram pelo menos 12 horas desde a última visita gravada
        const isNewUniqueVisitor = !sessionRegistered && (!lastVisit || now - parseInt(lastVisit, 10) > 12 * 60 * 60 * 1000);

        // Em desenvolvimento local (localhost / Vite dev), nunca incrementa para não poluir os dados reais
        const isDev = import.meta.env.DEV;
        const shouldIncrement = isNewUniqueVisitor && !isDev;

        // Se deve incrementar, chama /hit. Se é o mesmo usuário atualizando ou dev, chama /get (sem alterar o contador)
        const endpoint = shouldIncrement 
          ? `${API_BASE}/hit/${COUNTER_KEY}` 
          : `${API_BASE}/get/${COUNTER_KEY}`;

        const res = await fetch(endpoint);
        if (res.ok) {
          const data = await res.json();
          if (typeof data.value === 'number' && isMounted) {
            setVisitorCount(data.value);
            localStorage.setItem('dg_cached_visitors', data.value.toString());

            if (shouldIncrement) {
              sessionStorage.setItem(SESSION_KEY, 'true');
              localStorage.setItem(LAST_VISIT_KEY, now.toString());
            }
          }
        }
      } catch (err) {
        console.warn('Contador em modo offline / fallback:', err);
      }
    }

    syncCount();

    return () => {
      isMounted = false;
    };
  }, []);

  return visitorCount;
}
