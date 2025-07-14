import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap" 
          rel="stylesheet" 
        />
        
        {/* Google Tag Manager - gtag.js */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17146788150"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17146788150');
          `}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
        
        {/* Google Ads Conversion Events */}
        <Script id="google-ads-conversions" strategy="afterInteractive">
          {`
            // Event for "Quero Começar Agora" button (ID: btn-interesse)
            document.addEventListener('DOMContentLoaded', function() {
              var btnInteresse = document.getElementById('btn-interesse');
              if (btnInteresse) {
                btnInteresse.addEventListener('click', function() {
                  gtag('event', 'conversion', {
                    'send_to': 'AW-17146788150/E_luCK_9y9MaELbynPA_'
                  });
                });
              }

            // Event for buttons with class "btn-tem-interesse"
              var temInteresseButtons = document.querySelectorAll('.btn-tem-interesse');
              temInteresseButtons.forEach(function(button) {
                button.addEventListener('click', function() {
                  gtag_report_conversion_interesse();
                });
              });
            });

            // Function to report conversion for "Botão Tem Interesse"
            function gtag_report_conversion_interesse(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                  'send_to': 'AW-17146788150/xVy9CPSF0O4aELbynPA_',
                  'value': 0.0,
                  'currency': 'BRL',
                  'event_callback': callback
              });
              return false;
            }

            // Function to report conversion for the R$157 button
            function gtag_report_conversion_157(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                  'send_to': 'AW-17146788150/kg3zCJKFm9oaELbynPA_',
                  'transaction_id': '',
                  'event_callback': callback
              });
              return false;
            }

            // Function to report conversion for the R$357 button
            function gtag_report_conversion_357(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                  'send_to': 'AW-17146788150/Ff2eCJWFm9oaELbynPA_',
                  'transaction_id': '',
                  'event_callback': callback
              });
              return false;
            }

            // Function to report conversion for the R$467 button
            function gtag_report_conversion_467(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                  'send_to': 'AW-17146788150/uD-vCJiFm9oaELbynPA_',
                  'value': 216.89,
                  'currency': 'BRL',
                  'transaction_id': '',
                  'event_callback': callback
              });
              return false;
            }
          `}
        </Script>
      </body>
    </Html>
  );
}