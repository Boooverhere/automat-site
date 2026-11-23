import Script from 'next/script'

// From the Tawk.to embed code: https://embed.tawk.to/<PROPERTY_ID>/<WIDGET_ID>
const TAWK_PROPERTY_ID = '6b04622dc932e53cdfbe5b3c'
const TAWK_WIDGET_ID = '1k84hv0jq'

export default function TawkChat() {
  if (!TAWK_PROPERTY_ID) return null

  return (
    <Script id="tawk-to" strategy="lazyOnload">
      {`
        var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
        (function () {
          var s1 = document.createElement('script'), s0 = document.getElementsByTagName('script')[0];
          s1.async = true;
          s1.src = 'https://embed.tawk.to/${TAWK_PROPERTY_ID}/${TAWK_WIDGET_ID}';
          s1.charset = 'UTF-8';
          s1.setAttribute('crossorigin', '*');
          s0.parentNode.insertBefore(s1, s0);
        })();
      `}
    </Script>
  )
}
