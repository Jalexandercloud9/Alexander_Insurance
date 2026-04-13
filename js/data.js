// ============================================
// Alexander Insurance Group — Site Data
// ============================================

const SiteData = {
  brand: {
    name: 'Alexander Insurance Group',
    agent: 'Roland Alexander',
    tagline: 'Security Today. Legacy Tomorrow.',
    logo: 'AlexanderInsuranceLogo.PNG',
    profilePhoto: 'ProfilePhoto.png',
    heroImage: 'Happy_Family.png',
    video: 'Commercial.MOV',
    calendlyUrl: 'https://calendly.com/alexander-insurance/free-review',
    phone: '(555) 312-4200',
    email: 'roland@alexanderinsurancegroup.net',
    address: 'Serving clients nationwide',
  },

  nav: [
    { label: 'Home', hash: '#home' },
    { label: 'Services', hash: '#services' },
    { label: 'About', hash: '#about' },
    { label: 'Schedule', hash: '#schedule', cta: true },
  ],

  hero: {
    label: 'Insurance & Financial Services',
    title: 'Protect What Matters. <span>Build What Lasts.</span>',
    description: 'Alexander Insurance Group helps families and businesses secure their futures through comprehensive insurance and wealth-building strategies.',
    ctaPrimary: { text: 'Schedule a Call', hash: '#schedule' },
    ctaSecondary: { text: 'View Services', hash: '#services' },
  },

  trustItems: [
    { icon: 'bi-shield-check', text: 'Licensed & Certified' },
    { icon: 'bi-people', text: 'Families Served Nationwide' },
    { icon: 'bi-award', text: 'Top-Rated Independent Agent' },
    { icon: 'bi-clock-history', text: 'Personalized Service' },
  ],

  services: [
    {
      id: 'life',
      title: 'Life Insurance',
      icon: 'bi-heart-pulse',
      shortDesc: 'Build generational wealth and protect your family with Indexed Universal Life (IUL) strategies designed for long-term financial independence.',
      fullDesc: [
        'Life insurance is more than a safety net — it is a wealth-building tool. At Alexander Insurance Group, we specialize in Indexed Universal Life (IUL) policies that combine death benefit protection with tax-advantaged cash value growth tied to market indexes.',
        'An IUL policy lets your money grow when the market goes up, while protecting you from losses when it goes down. Over time, this builds a powerful financial asset you can borrow against for retirement income, education funding, or major purchases — all tax-free.',
        'Whether you are just starting a family or planning your legacy, we design a life insurance strategy tailored to your goals.',
      ],
      benefits: [
        'Tax-free retirement income through policy loans',
        'Death benefit protection for your loved ones',
        'Cash value growth tied to S&P 500 and other indexes',
        'Downside protection — your cash value never decreases due to market losses',
        'Flexible premiums that adapt to your life',
      ],
      carriers: ['National Life Group', 'Transamerica', 'Pacific Life', 'Nationwide', 'Allianz'],
    },
    {
      id: 'home',
      title: 'Home & Renters Insurance',
      icon: 'bi-house-door',
      shortDesc: 'Protect your home and belongings with coverage that fits your life — from homeowners policies to renters protection.',
      fullDesc: [
        'Your home is your biggest investment. Our homeowners and renters insurance policies protect against fire, theft, weather damage, liability claims, and more.',
        'We work with multiple carriers to find you the best coverage at competitive rates. Whether you own a single-family home, a condo, or rent an apartment, we tailor your policy to cover what matters most.',
        'We also bundle home and auto policies for additional savings, so you get maximum protection without overpaying.',
      ],
      benefits: [
        'Dwelling and personal property coverage',
        'Liability protection up to $1M+',
        'Additional living expense coverage',
        'Bundle discounts with auto insurance',
        'Coverage for natural disasters and weather events',
      ],
      carriers: ['Travelers', 'Hartford', 'Safeco', 'Progressive', 'Nationwide'],
    },
    {
      id: 'auto',
      title: 'Auto Insurance',
      icon: 'bi-car-front',
      shortDesc: 'Get the right auto coverage at the right price — liability, collision, comprehensive, and more from top-rated carriers.',
      fullDesc: [
        'Auto insurance should not be complicated or overpriced. We compare rates from multiple A-rated carriers to get you comprehensive coverage that fits your budget.',
        'From liability and collision to comprehensive and uninsured motorist coverage, we build a policy that protects you on the road without breaking the bank.',
        'Multi-vehicle discounts, safe driver rewards, and bundling options mean you keep more money in your pocket while staying fully protected.',
      ],
      benefits: [
        'Liability, collision, and comprehensive coverage',
        'Uninsured/underinsured motorist protection',
        'Multi-vehicle and multi-policy discounts',
        'Roadside assistance and rental car coverage',
        'SR-22 filing assistance',
      ],
      carriers: ['Progressive', 'Travelers', 'Safeco', 'National General', 'Kemper'],
    },
    {
      id: 'commercial',
      title: 'Commercial Insurance',
      icon: 'bi-building',
      shortDesc: 'Protect your business with tailored commercial coverage — general liability, property, workers comp, and professional liability.',
      fullDesc: [
        'Running a business comes with risk. Our commercial insurance solutions protect your company, employees, and assets so you can focus on growth.',
        'We work with business owners across industries to design coverage packages that address real-world risks — from customer injuries and property damage to lawsuits and employee claims.',
        'Whether you are a sole proprietor, LLC, or growing corporation, we find the right coverage at the right price.',
      ],
      benefits: [
        'General liability and professional liability',
        'Commercial property coverage',
        'Workers compensation',
        'Business owners policy (BOP)',
        'Commercial auto and fleet coverage',
      ],
      carriers: ['Hartford', 'Travelers', 'CNA', 'AmTrust', 'Nationwide'],
    },
  ],

  mission: {
    label: 'Our Mission',
    title: 'Financial Protection Is a Right, Not a Privilege',
    text: 'Every family deserves the security of knowing they are protected. At Alexander Insurance Group, we believe insurance is the foundation of financial freedom — and we are committed to making it accessible, understandable, and actionable for every client we serve.',
  },

  aboutPreview: {
    label: 'Meet Your Agent',
    title: 'Roland Alexander',
    text: 'Roland Alexander founded Alexander Insurance Group with a clear mission: help everyday families build wealth and protect what they have worked for. With deep expertise in Indexed Universal Life strategies and a client-first approach, Roland has helped hundreds of families take control of their financial futures.',
    quote: '"Insurance is not just about protection — it is about building a legacy that lasts for generations."',
    cta: { text: 'Read Full Story', hash: '#about' },
  },

  aboutFull: {
    label: 'About Roland',
    title: 'Roland Alexander',
    subtitle: 'Founder & Lead Agent — Alexander Insurance Group',
    bio: [
      'Roland Alexander is a licensed insurance and financial services professional dedicated to helping families and individuals achieve true financial independence. As the founder of Alexander Insurance Group, Roland brings a wealth of knowledge in life insurance, indexed universal life (IUL) strategies, and comprehensive risk management.',
      'Roland\'s journey into the insurance industry was driven by a personal mission: to close the financial literacy gap and give hardworking families the tools they need to build lasting wealth. Too many people see insurance as just an expense — Roland shows them it is an investment in their future.',
      'Specializing in IUL-based financial strategies, Roland helps clients build tax-free retirement income, protect their families with robust death benefits, and grow their wealth through market-linked cash value accumulation — all with downside protection.',
      'Beyond life insurance, Roland provides a full suite of coverage including home, auto, and commercial insurance, working with top-rated carriers to deliver the best value for every client.',
    ],
    missionStatement: 'My mission is simple: empower families with the knowledge, tools, and coverage they need to build security today and a legacy for tomorrow.',
    whoIWorkWith: [
      'Young professionals building their first financial foundation',
      'Families seeking life insurance and wealth-building strategies',
      'Homeowners and renters looking for reliable coverage',
      'Business owners needing comprehensive commercial protection',
      'Anyone ready to take control of their financial future',
    ],
  },

  contactForm: {
    title: 'Send a Message',
    serviceOptions: [
      'Life Insurance / IUL',
      'Home & Renters Insurance',
      'Auto Insurance',
      'Commercial Insurance',
      'General Inquiry',
    ],
  },

  footer: {
    tagline: 'Helping families build security and lasting wealth through smart insurance and financial strategies.',
    quickLinks: [
      { label: 'Home', hash: '#home' },
      { label: 'Services', hash: '#services' },
      { label: 'About', hash: '#about' },
      { label: 'Contact', hash: '#contact' },
      { label: 'Schedule a Call', hash: '#schedule' },
    ],
    legal: 'Alexander Insurance Group is a licensed insurance agency. Insurance products are offered through licensed carriers. Coverage availability and rates may vary by state. This website is for informational purposes only and does not constitute financial or legal advice.',
  },
};
