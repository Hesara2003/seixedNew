import {Image} from '@shopify/hydrogen';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  ctaText?: string;
  ctaLink?: string;
  textAlign?: 'left' | 'center' | 'right';
  overlay?: boolean;
}

export function Hero({
  title,
  subtitle,
  description,
  backgroundImage,
  ctaText = 'Shop Now',
  ctaLink = '/collections/all',
  textAlign = 'center',
  overlay = true,
}: HeroProps) {
  return (
    <section className={`hero hero--${textAlign}`}>
      {backgroundImage && (
        <div className="hero__background">
          <Image
            src={backgroundImage}
            alt=""
            sizes="100vw"
            className="hero__background-image"
          />
          {overlay && <div className="hero__overlay" />}
        </div>
      )}
      
      <div className="hero__content">
        <div className="hero__text">
          {subtitle && (
            <p className="hero__subtitle">{subtitle}</p>
          )}
          <h1 className="hero__title">{title}</h1>
          {description && (
            <p className="hero__description">{description}</p>
          )}
          {ctaText && ctaLink && (
            <a href={ctaLink} className="hero__cta button button--primary">
              {ctaText}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

// Alternative hero with split layout
export function HeroSplit({
  title,
  subtitle,
  description,
  image,
  ctaText = 'Shop Now',
  ctaLink = '/collections/all',
  imagePosition = 'right',
}: {
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  ctaText?: string;
  ctaLink?: string;
  imagePosition?: 'left' | 'right';
}) {
  return (
    <section className={`hero-split hero-split--${imagePosition}`}>
      <div className="hero-split__content">
        <div className="hero-split__text">
          {subtitle && (
            <p className="hero-split__subtitle">{subtitle}</p>
          )}
          <h1 className="hero-split__title">{title}</h1>
          {description && (
            <p className="hero-split__description">{description}</p>
          )}
          {ctaText && ctaLink && (
            <a href={ctaLink} className="hero-split__cta button button--primary">
              {ctaText}
            </a>
          )}
        </div>
      </div>
      
      {image && (
        <div className="hero-split__image">
          <Image
            src={image}
            alt=""
            sizes="50vw"
            className="hero-split__image-element"
          />
        </div>
      )}
    </section>
  );
}
