export default function Contact() {
  return (
    <section id='contact' className='section'>
      <h2>Contact Us</h2>
      <div className='about'>
        <p>
          📍 Address: 4, Kanadia Rd, Tilak Nagar <br /> Indore, Madhya Pradesh 452018
        </p>
        <p>
          <span>Click </span>
          <a
            href='https://maps.app.goo.gl/KpFjuGP9Zdi5YhKz6'
            target='_blank'
            rel='noopener noreferrer'
            style={{ textDecoration: 'underline', color: 'inherit', display: 'inline-block', lineHeight: '1.6' }}
          >
            here
          </a>
          <span> to navigate to us!</span>
        </p>
        <p>
          📞 Phone:{' '}
          <a href='tel:+1234567890' style={{ textDecoration: 'underline', color: 'inherit' }}>
            +91 9669944333
          </a>
        </p>
        <p>
          📧 Email:{' '}
          <a href='mailto:info@frankmenswear.com' style={{ textDecoration: 'underline', color: 'inherit' }}>
            frankmenswear2014@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}
