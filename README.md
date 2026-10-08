# Portfólio Dev Moderno & Profissional

Um portfólio web de alta performance construído com **React 19**, **Vite** e **Tailwind CSS**, projetado estrategicamente para impressionar recrutadores e gestores de tecnologia.

---

## Destaques do Portfólio

- **Design Moderno & Glassmorphism:** Interface limpa, responsiva, com visual escuro elegante (Dark Theme) e efeitos visuais sutis.
- **Desempenho Extremo:** Criado com Vite 8 e React 19, compilando em menos de 1 segundo.
- **Foco em Recrutamento:**
  - Badge dinâmica de disponibilidade ("Disponível para contratação").
  - Estatísticas de impacto profissional (Projetos entregues, Tecnologias, Horas de código).
  - Terminal interativo com stack e build status.
  - Seção com diferenciais ("Clean Code", "Design Responsivo", "Foco no Negócio").
- **Showcase de Projetos Avançado:**
  - Filtros por categoria (*Todos*, *Full Stack*, *Frontend*, *Backend*).
  - Campo de busca em tempo real por tecnologia ou palavra-chave.
  - Botões diretos para demonstração ao vivo (*Live Demo*) e código no GitHub.
  - **Modal Interativo de Detalhes:** Apresenta problemas resolvidos, arquitetura e lista de funcionalidades.
- **Contato Facilitado para Recrutadores:**
  - Botão de cópia de e-mail com 1 clique e feedback instantâneo.
  - Botão direto para WhatsApp com mensagem profissional pronta.
  - Links para LinkedIn, GitHub e Currículo PDF.
  - Formulário funcional com fallback direto para e-mail.

---

## Como Personalizar Seus Dados

Tudo que você precisa alterar está centralizado em um único arquivo:  
**`src/data/portfolioData.js`**

Nele você pode alterar:
1. **`personal`**: Seu nome, cargo, resumo, localização, e-mail, telefone/WhatsApp, links de redes sociais e link para baixar seu currículo.
2. **`stats`**: Números de projetos entregues, tecnologias, etc.
3. **`skills`**: Suas tecnologias favoritas em Frontend, Backend e Ferramentas.
4. **`projects`**: Seus próprios projetos, imagens, links de deploy e repositórios.
5. **`experience` & `education`**: Sua trajetória profissional e estudos.

---

## Como Rodar o Projeto Localmente

1. Certifique-se de ter o [Node.js](https://nodejs.org) instalado.
2. Abra o terminal na pasta do projeto e instale as dependências (caso ainda não tenha feito):
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Abra o link exibido no terminal (geralmente `http://localhost:5173`) no seu navegador.

---

## Como Hospedar na Web (Gratuitamente)

### Opção 1: Vercel (Recomendada - Mais fácil e rápida)
1. Crie uma conta gratuita em [vercel.com](https://vercel.com).
2. Suba o projeto para um repositório no seu GitHub:
   ```bash
   git init
   git add .
   git commit -m "Meu portfólio incrível"
   # crie o repo no github e vincule:
   git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
   git push -u origin main
   ```
3. No painel da Vercel, clique em **"Add New Project"** e selecione o repositório.
4. A Vercel detecta o Vite automaticamente. Clique em **"Deploy"**.
5. Em menos de 1 minuto seu portfólio estará online com certificado SSL gratuito (HTTPS)!

### Opção 2: Netlify
1. Crie uma conta em [netlify.com](https://netlify.com).
2. Conecte com seu GitHub e selecione o repositório.
3. O comando de build será `npm run build` e o diretório de publicação será `dist`.
4. Clique em **"Deploy"**.

---

## Dicas de Ouro para Conquistar Vagas:
1. **Sempre tenha os projetos online:** Recrutadores e tech leads adoram clicar e testar a aplicação funcionando antes de abrir o código.
2. **Tenha bons READMEs no GitHub:** Para cada projeto listado, inclua prints de tela, tecnologias usadas e como rodar.
3. **Mantenha os links de contato atualizados:** Teste o botão de WhatsApp e E-mail para garantir que eles direcionem para você.
