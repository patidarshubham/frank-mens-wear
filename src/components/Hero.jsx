import React from 'react';

export default function Hero() {
  const images = ['src/assets/Carousal1.png', 'src/assets/carousal2.png', 'src/assets/carousal3.png'];
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Helper for seamless infinite loop
  const totalImages = images.length;
  const extendedImages = [...images, images[0]];

  // Handle transition end for seamless looping
  const [isTransitioning, setIsTransitioning] = React.useState(true);

  React.useEffect(() => {
    if (current === totalImages) {
      // After transition to the cloned first image, jump to real first image without animation
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrent(0);
      }, 1000); // match transition duration
      return () => clearTimeout(timeout);
    } else {
      setIsTransitioning(true);
    }
  }, [current, totalImages]);

  return (
    <section
      className='hero'
      style={{
        position: 'relative',
        overflow: 'hidden',
        height: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        margin: '40px',
        borderRadius: '20px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
        background: '#222',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          width: 'calc(100% - 40px)',
          height: 'calc(100% - 40px)',
          overflow: 'hidden',
          borderRadius: '16px',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: `${extendedImages.length * 100}%`,
            height: '100%',
            transform: `translateX(-${current * (100 / extendedImages.length)}%)`,
            transition: isTransitioning ? 'transform 1s cubic-bezier(0.77,0,0.175,1)' : 'none',
          }}
        >
          {extendedImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt='Hero background'
              style={{
                width: `${100 / extendedImages.length}%`,
                height: '100%',
                objectFit: 'cover',
              }}
            />
          ))}
        </div>
      </div>
      <h2 style={{ position: 'relative', zIndex: 1 }}>Exclusive Men’s Ethnic Wear for Every Occasion</h2>
      <div
        style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '10px',
          zIndex: 2,
        }}
      >
        {images.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setCurrent(idx)}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: current === idx ? '#fff' : 'rgba(255,255,255,0.4)',
              cursor: 'pointer',
              border: current === idx ? '2px solid #fff' : 'none',
              transition: 'background 0.3s, border 0.3s',
              display: 'inline-block',
            }}
          />
        ))}
      </div>
    </section>
  );
}
