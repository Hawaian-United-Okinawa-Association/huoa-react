import React from 'react';
import { Helmet } from 'react-helmet';

const GoogleAnalytics = () => {

  return (
    <>
      <script async="" src="https://www.googletagmanager.com/gtag/js?id=UA-122356652-1"></script>
      <script>{`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments)}
      gtag('js', new Date());
      gtag('config', 'UA-122356652-1');`}
      </script>
    </>
  )
}

const Header = ({ props }) => {

  return !!props ? (
    <Helmet>
      <title>{props.seo.title || 'Huoa.org'}</title>
      <meta name="description" content={props.seo.description || 'Welcome to Huoa.org'} />

      <meta property="og:title" content={props.seo.title || 'Huoa.org'} />
      <meta property="og:description" content={props.seo.description || 'Welcome to Huoa.org'} />
      <meta property="og:image" content={props.seo.image} />

      <meta name="twitter:title" content={props.seo.title || 'Huoa.org'} />
      <meta name="twitter:description" content={props.seo.description || 'Welcome to Huoa.org'} />
      <meta name="twitter:image" content={props.seo.image} />
      <meta name="twitter:card" content="summary_large_image" />

      <script async="" src="https://www.googletagmanager.com/gtag/js?id=UA-122356652-1"></script>
      <script>{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());
        gtag('config', 'UA-122356652-1');`}
      </script>
    </Helmet>
  ) : null;
}

export default Header;
