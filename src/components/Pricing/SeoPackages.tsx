import SeoPackageCard from '../Card/SeoPackageCard'

interface PlanItem {
  text: string;
  isActive: boolean;
}

interface CartContent {
  heading: string;
  button: string;
  initial: PlanItem[];
  setup: PlanItem[];
  technical: PlanItem[];
  offPageSEOContent: PlanItem[];
  localSEOContent: PlanItem[];
  monthlyReportContent: PlanItem[];
}
export default function SeoPackages() {

  const cardContent: CartContent[] = [
    {
      heading: "Basic Plan",
      button: 'Select Plan',
      initial: [
        { text: 'Upto 10 Keyword Ranking', isActive: true },
        { text: 'Site Audit', isActive: true },
        { text: 'Competitor Analysis', isActive: true },
        { text: 'Google Analytics Setup', isActive: true },
        { text: 'Google Search Console Setup', isActive: true },
        { text: 'Robots.Txt Creation', isActive: true },
        { text: 'Sitemap Creation', isActive: true },
      ],
      setup: [
        { text: 'Keyword Research', isActive: true },
        { text: 'Keyword Mapping', isActive: false },
        { text: 'Few Major Pages Meta And Heading Tag Optimization', isActive: true },
        { text: 'URL Optimization', isActive: true },
        { text: 'Image Optimization', isActive: true },
        { text: '2 SEO Optimized Blog Articles', isActive: true },
        { text: 'Few Existing Content Optimization', isActive: true },
      ],
      technical: [
        { text: 'Canonical URL Addition', isActive: true },
        { text: 'Custom 404 Page Setup', isActive: true },
        { text: 'OG Tags', isActive: true },
        { text: 'Page Redirection', isActive: true },
        { text: 'Sitemap', isActive: true },
        { text: 'Robots.Txt', isActive: true },
        { text: 'Browser Compatibility Check', isActive: true },
        { text: 'Page Speed Optimization', isActive: true },
        { text: 'Broken Link Fixing', isActive: false },
        { text: 'Site Architecture', isActive: false },
        { text: 'Mobile Friendliness', isActive: false },
        { text: 'Solve Keyword Cannibalization', isActive: false },
        { text: 'Hreflang Tags', isActive: false },
        { text: 'Competitor Backlink Research', isActive: false },
        { text: 'Other Webmaster Optimization', isActive: true },
      ],
      offPageSEOContent: [
        { text: 'Link Building', isActive: false },
        { text: 'Guest Blogging', isActive: false },
        { text: 'Directory Submission', isActive: false },
        { text: 'Quora Posting', isActive: true },
        { text: 'Reddit Posting', isActive: true },
        { text: 'Schema Implementation', isActive: false },
        { text: 'Conversion Tracking', isActive: false },
        { text: 'Infographic Creation And Sharing', isActive: false },
      ],
      localSEOContent: [
        { text: 'GMB Setup & Optimization', isActive: true },
        { text: 'GMB Posting', isActive: false },
        { text: 'Google Map Creation', isActive: true },
        { text: 'Local Citation', isActive: false },
      ],
      monthlyReportContent: [
        { text: 'Work Done Report', isActive: true },
        { text: 'On Page Report', isActive: true },
        { text: 'Backlink Report', isActive: false },
        { text: 'Traffic By Country', isActive: true },
        { text: 'Traffic Comparison', isActive: true },
        { text: 'Top 10 Performing Pages', isActive: true },
        { text: 'Top 10 Keywords', isActive: true },
        { text: 'Clicks, Impression, Position', isActive: true },
      ],
    },
    {
      heading: "Standard Plan",
      button: 'Select Plan',
      initial: [
        { text: 'Upto 10 Keyword Ranking', isActive: true },
        { text: 'Site Audit', isActive: true },
        { text: 'Competitor Analysis', isActive: true },
        { text: 'Google Analytics Setup', isActive: true },
        { text: 'Google Search Console Setup', isActive: true },
        { text: 'Robots.Txt Creation', isActive: true },
        { text: 'Sitemap Creation', isActive: true },
      ],
      setup: [
        { text: 'Keyword Research', isActive: true },
        { text: 'Keyword Mapping', isActive: true },
        { text: 'Few Major Pages Meta And Heading Tag Optimization', isActive: true },
        { text: 'URL Optimization', isActive: true },
        { text: 'Image Optimization', isActive: true },
        { text: '2 SEO Optimized Blog Articles', isActive: true },
        { text: 'Few Existing Content Optimization', isActive: true },
      ],
      technical: [
        { text: 'Canonical URL Addition', isActive: true },
        { text: 'Custom 404 Page Setup', isActive: true },
        { text: 'OG Tags', isActive: true },
        { text: 'Page Redirection', isActive: true },
        { text: 'Sitemap', isActive: true },
        { text: 'Robots.Txt', isActive: true },
        { text: 'Browser Compatibility Check', isActive: true },
        { text: 'Page Speed Optimization', isActive: true },
        { text: 'Broken Link Fixing', isActive: true },
        { text: 'Site Architecture', isActive: true },
        { text: 'Mobile Friendliness', isActive: true },
        { text: 'Solve Keyword Cannibalization', isActive: true },
        { text: 'Hreflang Tags', isActive: false },
        { text: 'Competitor Backlink Research', isActive: false },
        { text: 'Other Webmaster Optimization', isActive: true },
      ],
      offPageSEOContent: [
        { text: 'Link Building', isActive: true },
        { text: 'Guest Blogging', isActive: false },
        { text: 'Directory Submission', isActive: true },
        { text: 'Quora Posting', isActive: true },
        { text: 'Reddit Posting', isActive: true },
        { text: 'Schema Implementation', isActive: true },
        { text: 'Conversion Tracking', isActive: false },
        { text: 'Infographic Creation And Sharing', isActive: true },
      ],
      localSEOContent: [
        { text: 'GMB Setup & Optimization', isActive: true },
        { text: 'GMB Posting', isActive: true },
        { text: 'Google Map Creation', isActive: true },
        { text: 'Local Citation', isActive: true },
      ],
      monthlyReportContent: [
        { text: 'Work Done Report', isActive: true },
        { text: 'On Page Report', isActive: true },
        { text: 'Backlink Report', isActive: true },
        { text: 'Traffic By Country', isActive: true },
        { text: 'Traffic Comparison', isActive: true },
        { text: 'Top 10 Performing Pages', isActive: true },
        { text: 'Top 10 Keywords', isActive: true },
        { text: 'Clicks, Impression, Position', isActive: true },
      ],
    },
    {
      heading: "Premium Plan",
      button: 'Select Plan',
      initial: [
        { text: 'Upto 10 Keyword Ranking', isActive: true },
        { text: 'Site Audit', isActive: true },
        { text: 'Competitor Analysis', isActive: true },
        { text: 'Google Analytics Setup', isActive: true },
        { text: 'Google Search Console Setup', isActive: true },
        { text: 'Robots.Txt Creation', isActive: true },
        { text: 'Sitemap Creation', isActive: true },
      ],
      setup: [
        { text: 'Keyword Research', isActive: true },
        { text: 'Keyword Mapping', isActive: true },
        { text: 'Few Major Pages Meta And Heading Tag Optimization', isActive: true },
        { text: 'URL Optimization', isActive: false },
        { text: 'Image Optimization', isActive: true },
        { text: '2 SEO Optimized Blog Articles', isActive: true },
        { text: 'Few Existing Content Optimization', isActive: true },
      ],
      technical: [
        { text: 'Canonical URL Addition', isActive: true },
        { text: 'Custom 404 Page Setup', isActive: true },
        { text: 'OG Tags', isActive: true },
        { text: 'Page Redirection', isActive: true },
        { text: 'Sitemap', isActive: true },
        { text: 'Robots.Txt', isActive: true },
        { text: 'Browser Compatibility Check', isActive: true },
        { text: 'Page Speed Optimization', isActive: true },
        { text: 'Broken Link Fixing', isActive: true },
        { text: 'Site Architecture', isActive: true },
        { text: 'Mobile Friendliness', isActive: true },
        { text: 'Solve Keyword Cannibalization', isActive: true },
        { text: 'Hreflang Tags', isActive: false },
        { text: 'Competitor Backlink Research', isActive: false },
        { text: 'Other Webmaster Optimization', isActive: true },
      ],
      offPageSEOContent: [
        { text: 'Link Building', isActive: true },
        { text: 'Guest Blogging', isActive: true },
        { text: 'Directory Submission', isActive: true },
        { text: 'Quora Posting', isActive: true },
        { text: 'Reddit Posting', isActive: true },
        { text: 'Schema Implementation', isActive: true },
        { text: 'Conversion Tracking', isActive: true },
        { text: 'Infographic Creation And Sharing', isActive: true },
      ],
      localSEOContent: [
        { text: 'GMB Setup & Optimization', isActive: true },
        { text: 'GMB Posting', isActive: true },
        { text: 'Google Map Creation', isActive: true },
        { text: 'Local Citation', isActive: true },
      ],
      monthlyReportContent: [
        { text: 'Work Done Report', isActive: true },
        { text: 'On Page Report', isActive: true },
        { text: 'Backlink Report', isActive: true },
        { text: 'Traffic By Country', isActive: true },
        { text: 'Traffic Comparison', isActive: true },
        { text: 'Top 10 Performing Pages', isActive: true },
        { text: 'Top 10 Keywords', isActive: true },
        { text: 'Clicks, Impression, Position', isActive: true },
      ],
    },
    {
      heading: "Premium Plus Plan",
      button: 'Contact Sales',
      initial: [
        { text: 'Upto 10 Keyword Ranking', isActive: true },
        { text: 'Site Audit', isActive: true },
        { text: 'Competitor Analysis', isActive: true },
        { text: 'Google Analytics Setup', isActive: true },
        { text: 'Google Search Console Setup', isActive: true },
        { text: 'Robots.Txt Creation', isActive: true },
        { text: 'Sitemap Creation', isActive: true },
      ],
      setup: [
        { text: 'Keyword Research', isActive: true },
        { text: 'Keyword Mapping', isActive: true },
        { text: 'Few Major Pages Meta And Heading Tag Optimization', isActive: true },
        { text: 'URL Optimization', isActive: true },
        { text: 'Image Optimization', isActive: true },
        { text: '2 SEO Optimized Blog Articles', isActive: true },
        { text: 'Few Existing Content Optimization', isActive: true },
      ],
      technical: [
        { text: 'Canonical URL Addition', isActive: true },
        { text: 'Custom 404 Page Setup', isActive: true },
        { text: 'OG Tags', isActive: true },
        { text: 'Page Redirection', isActive: true },
        { text: 'Sitemap', isActive: true },
        { text: 'Robots.Txt', isActive: true },
        { text: 'Browser Compatibility Check', isActive: true },
        { text: 'Page Speed Optimization', isActive: true },
        { text: 'Broken Link Fixing', isActive: true },
        { text: 'Site Architecture', isActive: true },
        { text: 'Mobile Friendliness', isActive: true },
        { text: 'Solve Keyword Cannibalization', isActive: true },
        { text: 'Hreflang Tags', isActive: true },
        { text: 'Competitor Backlink Research', isActive: true },
        { text: 'Other Webmaster Optimization', isActive: true },
      ],
      offPageSEOContent: [
        { text: 'Link Building', isActive: true },
        { text: 'Guest Blogging', isActive: true },
        { text: 'Directory Submission', isActive: true },
        { text: 'Quora Posting', isActive: true },
        { text: 'Reddit Posting', isActive: true },
        { text: 'Schema Implementation', isActive: true },
        { text: 'Conversion Tracking', isActive: true },
        { text: 'Infographic Creation And Sharing', isActive: true },
      ],
      localSEOContent: [
        { text: 'GMB Setup & Optimization', isActive: true },
        { text: 'GMB Posting', isActive: true },
        { text: 'Google Map Creation', isActive: true },
        { text: 'Local Citation', isActive: true },
      ],
      monthlyReportContent: [
        { text: 'Work Done Report', isActive: true },
        { text: 'On Page Report', isActive: true },
        { text: 'Backlink Report', isActive: true },
        { text: 'Traffic By Country', isActive: true },
        { text: 'Traffic Comparison', isActive: true },
        { text: 'Top 10 Performing Pages', isActive: true },
        { text: 'Top 10 Keywords', isActive: true },
        { text: 'Clicks, Impression, Position', isActive: true },
      ],
    },
  ];



  return (
    <>
      <div className='relative flex flex-col items-center w-full gap-4 mt-12'>
        <div className='flex items-center justify-center w-full gap-2 p-2'>
          <div className='w-[3rem] border-b-2 border-blue-500'></div>
          <h2 className="text-black text-[0.8rem] sm:text-[1rem] font-semibold z-10">SUBSCRIPTION PLAN</h2>
          <div className='w-[3rem] border-b-2 border-blue-500'></div>
        </div>

        <div>
        <p className="text-[1.2rem] sm:text-[2rem] font-bold z-10 ">
              Seo <span className="z-10 text-blue-700">Packages</span>
            </p>        </div>

        <div className='text-[#5a5a5a] pl-4'>
        <p className="z-10 m-5 text-sm sm:text-md">
        Choose plans from our simple, transparent pricing
              </p>
        </div>


        <button className='py-3 px-6 bg-[#EFF569] hover:bg-yellow-300 rounded-2xl h  text-black font-semibold lg:absolute lg:top-6 lg:right-24'>Download Brouchure</button>
      </div>

      <div className='w-full gap-4 p-4 place-items-center md:grid md:grid-cols-2 lg:grid-cols-4 '>
        {cardContent.map((item, index) => (
          <div key={index} >
            <SeoPackageCard heading={item.heading} btn={item.button} initial={item.initial} setup={item.setup} technical={item.technical} offPageSEOContent={item.offPageSEOContent} localSEOContent={item.localSEOContent} monthlyReportContent={item.monthlyReportContent} />
          </div>
        ))}
      </div>

    </>
  )
}
