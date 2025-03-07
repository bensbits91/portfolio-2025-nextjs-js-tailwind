const content = {
   heading: 'SEO & Web Optimization',
   subheading: 'Core Web Vitals, Performance, Accessibility, and more',
   sections: [
      {
         heading: 'Overview',
         layout: 'OneColumnSection',
         content: [
            "The biggest web performance optimization project that I've been heavily involved with was an overhaul of the public website at www.zenbusiness.com."
         ]
      },
      {
         heading: 'Background',
         layout: 'OneColumnSection',
         subsections: [
            {
               heading: 'Adapting to SEO Changes',
               content: [
                  'I joined the Acquisition Team around the time that Google shifted from content-based SEO metrics to core web vitals, and our website was no longer performing well. We had a separate SEO Team that understood what metrics we needed to improve. They set targets for core web vitals, including TTFB, FCP, LCP and CLS. I led the efforts to make the technical changes required to realize those goals.'
               ]
            },
            {
               heading: 'The Stack',
               content: [
                  'The website was coded with PHP, JS and CSS, using WordPress for CMS.'
               ]
            }
         ]
      },
      {
         heading: 'The Approach',
         layout: 'OneColumnSection',
         subsections: [
            {
               heading: 'Getting Started',
               content: [
                  'I had prior experience improving SEO for a similar (though smaller) website, but that was when SEO was more content-centric. Nobody at the company had experience improving core web vitals, so I led a methodical approach to identify potential improvements, implement them one at a time, and record “before” and “after” metrics. We used multiple tools, but relied on Pagespeed Insights (https://pagespeed.web.dev) for analysis.'
               ]
            },
            {
               heading: 'Cutting Bloat',
               content: [
                  'We assumed (and later proved) that unnecessary and unoptimized JavaScript was the worst offender. We analyzed network requests and lighthouse reports, and identified scripts and bundles that blocked rendering. Then we eliminated some unnecessary plugins and replaced most third-party plugins with our own. We also required all JavaScript to be written with performance in mind, and minified for production. This led to a quick improvement in TTFB and FCP. '
               ]
            },
            {
               heading: 'Optimizing Images',
               content: [
                  'Next, we optimized images and image delivery. We worked with designers to make sure our images were optimized for the web, and we used Cloudinary to provide an image CDN and to request the correct size, format and quality of each image. We also required most images to include a static width and height to enable the first content to load with placeholders for images (that might take longer to load), which vastly improved LCP and all but eliminated CLS.'
               ]
            },
            {
               heading: 'Miscellaneous Improvements',
               content: [
                  'We improved some other aspects of our website, too, such as loading as little CSS as possible on each page and optimizing our font delivery. We took on each aspect one at a time, and we analyzed every page. We started with the page most visited or most critical to our marketing efforts, and worked our way through every page.'
               ]
            }
         ]
      },
      {
         heading: 'Success Then & Ongoing',
         layout: 'OneColumnSection',
         subsections: [
            {
               heading: 'Positive Results',
               content: [
                  "I can't remember the individual starting metrics for each core web vital (I remember some red 50s and 60s though), but we exceeded our targets and got all of our key metrics to 99. We also implemented ongoing monitoring and generally required all changes that might impact metrics to include the recording of “before” and “after” metrics to ensure that we maintained our gains. This project had a significant impact on the company's conversion rates, which made lots of folks happy."
               ]
            },
            {
               heading: 'Best Practices & Ongoing Improvement',
               content: [
                  'I documented base best practices in Confluence and provided training and ongoing support.'
               ]
            }
         ]
      },
      {
         heading: 'Need help with Web Optimization?',
         layout: 'Cta',
         content: ["Let's chat and see if I can help you with your project."],
         link: {
            href: '/contact',
            text: "Let's connect!"
         }
      }
   ]
};

export default content;
