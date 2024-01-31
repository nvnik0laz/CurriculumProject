import styles from './Home.module.css'
export default function Home() {
  return (
    <div>
      <header className={styles.cabecalho}>
    <a href=''><img src='assets/gato.png' className='gatoimg'></img></a>
    <nav className='navluz'>
      <div>
        <a href='index.html'><img src='assets/casa.png'></img></a>
        <h3>Homepage</h3>
      </div>
      <div>
        <a href='clients.html'><img src='assets/pata.png'></img></a>
        <h3>Clientes</h3>
      </div>
      <div>
        <a href='https://wa.me/5551993656418'><img src='assets/balao.png'></img></a>
        <h3>Agende Já</h3>
      </div>
    </nav>
  </header>
  <section className='quemsoueu'>
    <div className='quemsoueudiv'>
      <h1>QUEM SOU EU?</h1>
      <p>Me chamo Nikolas da Luz, estudante de auxiliar de veterinária e pet shop apaixonado por animais. Estou aqui para lhe oferecer serviços de banho e tosa para seu bichano.
        O conforto de seu pet é a prioridade!</p>
      <a href='clients.html'><b>Veja meus clientes!</b></a>
    </div>
    <img src='images/luz.jpeg' className='luzimg'></img>
  </section>
  <h1 className='inicio'>Atendimento</h1>
  <section className='atendimento'>
    <div className="item1"><b>Conforto como prioridade:</b>
      Diferente de muitos profissionais, viso em primeiro lugar o conforto de seu pet, adaptando o procedimento para o animal ao inves de adapta-lo ao procedimento.</div>
    <div className="item1"><b>Cuidado especial com a pelagem:</b>
      Cada tosa é uma obra arte, destacando a elegância e ressaltando a beleza natural do animal.</div>
    <div className="item1"><b>Produtos de qualidade:</b>
      Utilizando dos melhores produtos para proteger a pelagem e a pele de seu bichano.</div>
  </section>
  <h1 className='inicio'>Clientes</h1>
  <section className='clientes'>
    <div className="item2"><img src='images/bola.jpeg'></img><h3>Bola: banho e tosa verão</h3><h4>R$55,00</h4></div>
    <div className="item2"><img src='images/brutus.jpeg'></img><h3>Brutus: Banho</h3><h4>R$50,00</h4></div>
    <div className="item2"><img src='images/coisinha.jpg'></img><h3>Coisinha: Banho e tosa</h3><h4>R$45,00</h4></div>
    <div className="item2"><img src='images/luna.jpeg'></img><h3>Luna: Banho</h3><h4>R$40,00</h4></div>
    <div className="item2"><img src='images/bento.jpeg'></img><h3>Bento: Banho</h3><h4>R$35,00</h4></div>
    <div className="item2"><img src='images/chica.png'></img><h3>Chica: Banho e tosa</h3><h4>R$45,00</h4></div>
  </section>
  </div>
  );
}
