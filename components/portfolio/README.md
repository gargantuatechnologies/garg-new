# Portfolio Components

Esta pasta contém todos os componentes relacionados ao portfolio da Gargantua Technologies.

## Estrutura de Componentes

### Página Principal (`/portfolio`)
- **`portfolio-hero.tsx`** - Hero section com animações e efeitos visuais
- **`portfolio-stats.tsx`** - Estatísticas dos projetos em produção
- **`portfolio-grid.tsx`** - Grid de projetos com filtros
- **`portfolio-card.tsx`** - Card individual de cada projeto
- **`portfolio-cta.tsx`** - Call-to-action para contato

### Páginas Individuais (`/portfolio/[id]`)
- **`project-hero.tsx`** - Hero específico do projeto
- **`project-gallery.tsx`** - Galeria de imagens do projeto
- **`project-details.tsx`** - Detalhes (desafio, solução, resultados)
- **`project-stats.tsx`** - Estatísticas específicas do projeto
- **`project-tech.tsx`** - Tecnologias utilizadas
- **`project-cta.tsx`** - CTA específico do projeto

## Características

### 🎨 Design
- **Identidade Visual**: Segue a paleta de cores da Gargantua
- **Gradientes**: Azul metálico (#126AF9) e ciano (#20BCED)
- **Tipografia**: Fontes modernas e hierarquia clara
- **Espaçamento**: Layout responsivo e bem estruturado

### ✨ Animações
- **Framer Motion**: Animações suaves e profissionais
- **Hover Effects**: Interações visuais nos elementos
- **Scroll Animations**: Elementos aparecem conforme scroll
- **Loading States**: Transições elegantes

### 📱 Responsividade
- **Mobile First**: Design otimizado para mobile
- **Breakpoints**: Adaptação para tablet e desktop
- **Touch Friendly**: Botões e elementos touch-friendly

### 🚀 Performance
- **Lazy Loading**: Imagens carregadas sob demanda
- **Code Splitting**: Componentes carregados quando necessário
- **Optimized Images**: Next.js Image optimization

## Tecnologias Utilizadas

- **Next.js 14** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Framer Motion** - Animações
- **Lucide React** - Ícones
- **Shadcn/ui** - Componentes base

## Como Usar

### Adicionar Novo Projeto

1. Adicione os dados do projeto em `portfolio-grid.tsx`
2. Crie uma nova pasta em `app/portfolio/[id]/`
3. Crie a página `page.tsx` com os dados específicos
4. Adicione as imagens na pasta `public/images/`

### Customizar Animações

As animações podem ser customizadas nos componentes usando as props do Framer Motion:
- `initial` - Estado inicial
- `animate` - Estado animado
- `transition` - Configuração da transição
- `whileHover` - Animação no hover
- `whileInView` - Animação quando visível

### Adicionar Nova Tecnologia

Para adicionar uma nova tecnologia em `project-tech.tsx`:
1. Adicione o ícone no objeto `techIcons`
2. Importe o ícone do Lucide React
3. A tecnologia aparecerá automaticamente nos projetos
