export default function Collections() {
  return (
    <section id='collections' className='section'>
      <h2>Our Collections</h2>
      <div className='cards'>
        <div className='card'>
          <img src='/src/assets/sherwani.jpg' alt='Sherwani' />
          <h3>Sherwanis</h3>
          <p>Royal sherwanis perfect for weddings and grand celebrations.</p>
        </div>
        <div className='card'>
          <img src='/src/assets/kurta2.jpg' alt='Kurta Pajama' />
          <h3>Kurta Pajamas</h3>
          <p>Simple, elegant, and timeless designs for every occasion.</p>
        </div>
        <div className='card'>
          <img src='/src/assets/suit.jpg' alt='Suit' />
          <h3>Suits</h3>
          <p>Classic bandhgala suits with a modern twist for formal events.</p>
        </div>
      </div>
    </section>
  );
}
