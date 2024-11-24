export const initialContent = `
 <article>
    <header>
      <h1>Uma Introdução ao Tailwind CSS: Vantagens e Como Ele Transforma o HTML</h1>
      <p>Os frameworks CSS revolucionaram o desenvolvimento web, facilitando a criação de interfaces bonitas e responsivas. Entre esses frameworks, o <strong>Tailwind CSS</strong> se destaca como uma solução inovadora, oferecendo classes utilitárias e flexibilidade incomparável. Vamos explorar o que torna o Tailwind CSS tão popular, suas vantagens e como ele se integra perfeitamente ao desenvolvimento em HTML.</p>
    </header>
    <section>
      <h2>O Que é o Tailwind CSS?</h2>
      <p>O Tailwind CSS é um framework CSS baseado em utilitários, projetado para acelerar a estilização ao fornecer classes prontas diretamente no HTML. Em vez de escrever CSS personalizado para cada componente, você compõe estilos utilizando classes utilitárias, como <code>flex</code>, <code>text-center</code> ou <code>bg-blue-500</code>. Essa abordagem elimina a necessidade de sair do arquivo HTML ou gerenciar arquivos CSS extensos manualmente.</p>
      <blockquote>
        "O Tailwind CSS permite que você foque em projetar seus componentes em vez de se preocupar com convenções de nomenclatura ou criar um arquivo CSS gigantesco."
      </blockquote>
      <p>Por exemplo, criar um botão simples com um efeito de hover fica assim:</p>
      <pre><code class="language-javascript"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Clique Aqui
</button></code></pre>
    </section>
    <section>
      <h2>Vantagens do Tailwind CSS</h2>
      <h3>1. Abordagem Baseada em Utilitários</h3>
      <ul>
        <li><strong>Estilização Eficiente</strong>: O Tailwind promove uma abordagem <em>baseada em utilitários de baixo nível</em>, permitindo criar designs altamente personalizados sem sair do arquivo HTML.</li>
        <li><strong>Evita Sobrecarga de CSS</strong>: Não é necessário escrever definições de classe personalizadas em um arquivo CSS separado para estilos comuns, reduzindo a redundância.</li>
      </ul>
      <p>Aqui está um exemplo de como criar um layout em grid responsivo:</p>
      <pre><code class="language-javascript"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div class="bg-gray-200 p-4">Item 1</div>
  <div class="bg-gray-200 p-4">Item 2</div>
  <div class="bg-gray-200 p-4">Item 3</div>
</div></code></pre>
      <p>As classes <code>grid</code>, <code>grid-cols-1</code> e <code>gap-4</code> definem o grid e seu espaçamento, enquanto os pontos de ajuste responsivos <code>md:grid-cols-2</code> e <code>lg:grid-cols-3</code> ajustam o número de colunas com base no tamanho da tela.</p>
      <h3>2. Altamente Personalizável</h3>
      <p>O Tailwind permite personalização extensa por meio de um arquivo de configuração (<code>tailwind.config.js</code>), onde você pode definir cores, fontes, espaçamentos e pontos de quebra para atender ao sistema de design do seu projeto. Por exemplo:</p>
      <pre><code class="language-javascript">module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#1a202c',
        secondary: '#2b6cb0',
      },
    },
  },
};</code></pre>
    </section>
    <section>
      <h2>Como o Tailwind CSS se Aplica ao HTML</h2>
      <p>Vamos examinar como o Tailwind transforma HTML típico em código funcional e visualmente atraente.</p>
      <h3>Exemplo: Criando um Card Responsivo</h3>
      <pre><code class="language-javascript"><div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
  <img class="w-full" src="https://via.placeholder.com/300" alt="Imagem do Card">
  <div class="px-6 py-4">
    <h1 class="font-bold text-xl mb-2">Card com Tailwind CSS</h1>
    <p class="text-gray-700 text-base">
      Este é um exemplo de card criado com Tailwind CSS. Ele demonstra design responsivo,
      tipografia limpa e utilitários de sombra.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2">
      #TailwindCSS
    </span>
    <span class="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2">
      #CSS
    </span>
  </div>
</div></code></pre>
    </section>
    <section>
      <h2>Conclusão</h2>
      <p>O Tailwind CSS redefiniu a estilização web moderna ao simplificar os fluxos de trabalho e permitir que desenvolvedores criem designs personalizados mais rapidamente. Sua abordagem baseada em utilitários, personalização e responsividade o tornam uma excelente escolha para projetos de qualquer tamanho. Se você busca um framework que empodere a criatividade sem sacrificar a agilidade, o Tailwind CSS vale a pena ser explorado.</p>
      <p>Explore a documentação e experimente o poder do CSS baseado em utilitários hoje mesmo!</p>
    </section>
  </article>
`