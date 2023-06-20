# Razi-UI

Exemplo de lib de componentes React em [TypeScript](https://typescript.org/docs/) estilizados com [TailwindCSS](https://tailwindcss.com).
O projeto conta com [Storybook](https://storybook.js.org/) configurado para testar e exibir os componentes.
Para fazer o bundle dos arquivos, foi utilizado [Microbundle](https://github.com/developit/microbundle) por conveniência.

### Usando a lib em um projeto

1. Adicione a lib ao seu projeto:
    ```bash
      pnpm add razi-ui
    ```
2. No main entry point do seu projeto, adicione a estilização:
    ```bash
    # main.tsx || App.tsx
      import 'razi-ui/dist/razi-ui.css';
    ```

### Desenvolvendo localmente
```bash
# Instalando as dependências
  pnpm install

# Dev mode (storybook dev)
  pnpm dev

# Building
  pnpm build
```
