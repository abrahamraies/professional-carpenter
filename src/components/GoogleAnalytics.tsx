import { Helmet } from 'react-helmet-async';

const GoogleAnalytics: React.FC = () => {
  // Replace 'GA_MEASUREMENT_ID' with your actual Google Analytics 4 measurement ID
  const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

  return (
    <Helmet>
      {/* Google Analytics 4 */}
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            send_page_view: false
          });
          
          // Custom event tracking for conversions
          function trackConversion(action, category = 'engagement') {
            gtag('event', action, {
              event_category: category,
              event_label: window.location.pathname
            });
          }
          
          // Make trackConversion available globally
          window.trackConversion = trackConversion;
        `}
      </script>
    </Helmet>
  );
};

export default GoogleAnalytics;