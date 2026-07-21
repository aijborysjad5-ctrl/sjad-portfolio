export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold">
          SJAD Studio
        </h1>

        <div className="hidden md:flex gap-8 text-sm">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">About</a>
          <a href="#" className="hover:text-blue-600">Portfolio</a>
          <a href="#" className="hover:text-blue-600">Contact</a>
        </div>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
          Hire Me
        </button>
      </nav>


      {/* Hero */}
      <section className="max-w-6xl mx-auto px-8 py-24 grid md:grid-cols-2 gap-12 items-center">

        <div>

          <p className="text-blue-600 font-medium mb-4">
            Graphic Designer & Arabic-Persian Translator
          </p>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            Creating
            <span className="text-blue-600"> visual stories </span>
            that build brands.
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-8">
            I help businesses create memorable identities through
            modern graphic design, branding and AI-powered creativity.
          </p>


          <div className="mt-8 flex gap-4">

            <button className="bg-black text-white px-7 py-3 rounded-full">
              View Portfolio
            </button>

            <button className="border border-gray-300 px-7 py-3 rounded-full">
              Download CV
            </button>

          </div>


          <div className="flex gap-10 mt-12">

            <div>
              <h3 className="text-3xl font-bold">30+</h3>
              <p className="text-gray-500">Projects</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">2+</h3>
              <p className="text-gray-500">Years Experience</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">3</h3>
              <p className="text-gray-500">Languages</p>
            </div>

          </div>

        </div>


        {/* Image Placeholder */}
        <div className="h-[450px] rounded-3xl bg-gradient-to-br from-blue-100 to-gray-100 flex items-center justify-center">

          <div className="text-center">
            <div className="w-40 h-40 rounded-full bg-blue-600 mx-auto mb-5"></div>

            <p className="text-gray-500">
              Your Professional Photo
            </p>
          </div>

        </div>


      </section>


      {/* About Preview */}
      <section className="max-w-4xl mx-auto px-8 py-20 text-center">

        <h2 className="text-3xl font-bold">
          About Me
        </h2>

        <p className="mt-5 text-gray-600 leading-8">
          I am a graphic designer specializing in logo design,
          brand identity and marketing visuals.
          I combine creativity with AI tools to deliver modern
          and effective designs.
        </p>

      </section>

{/* Services */}
<section className="max-w-6xl mx-auto px-8 py-20">
<section id="services" className="max-w-6xl mx-auto px-8 py-20"></section>
  <h2 className="text-4xl font-bold text-center">
    Our Services
  </h2>

  <p className="text-gray-600 text-center mt-4">
    Creative solutions to help your brand grow.
  </p>


  <div className="grid md:grid-cols-3 gap-8 mt-12">

    <div className="p-8 rounded-3xl bg-gray-50 hover:shadow-lg transition">
      <h3 className="text-2xl font-bold">
        Brand Identity
      </h3>
      <p className="mt-4 text-gray-600">
        Logo design, brand colors and complete visual identity.
      </p>
    </div>


    <div className="p-8 rounded-3xl bg-gray-50 hover:shadow-lg transition">
      <h3 className="text-2xl font-bold">
        Graphic Design
      </h3>
      <p className="mt-4 text-gray-600">
        Posters, social media designs and marketing materials.
      </p>
    </div>


    <div className="p-8 rounded-3xl bg-gray-50 hover:shadow-lg transition">
      <h3 className="text-2xl font-bold">
        Translation
      </h3>
      <p className="mt-4 text-gray-600">
        Arabic and Persian professional translation services.
      </p>
    </div>

  </div>

</section>                               
   {/* Portfolio */}
<section
  id="portfolio"
  className="max-w-6xl mx-auto px-8 py-20"
>

  <h2 className="text-4xl font-bold text-center">
    Portfolio
  </h2>

  <p className="text-gray-600 text-center mt-4">
    Selected projects and creative works by SJAD Studio.
  </p>


  <div className="mt-12 grid md:grid-cols-3 gap-8">


    {/* Project 1 */}
    <div className="rounded-3xl overflow-hidden bg-gray-50">
      <img
        src="/images/logo-1.jpg.jpg"
        alt="Logo Design"
        className="w-full h-64 object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-bold">
          Logo Design
        </h3>

        <p className="mt-2 text-gray-600">
          Modern and memorable logo concepts.
        </p>
      </div>
    </div>



    {/* Project 2 */}
    <div className="rounded-3xl overflow-hidden bg-gray-50">

      <img
        src="/images/brand-1.jpg.jpg"
        alt="Brand Identity"
        className="w-full h-64 object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-bold">
          Brand Identity
        </h3>

        <p className="mt-2 text-gray-600">
          Complete visual identity solutions.
        </p>
      </div>

    </div>



    {/* Project 3 */}
    <div className="rounded-3xl overflow-hidden bg-gray-50">

      <img
        src="/images/social-1.jpg.jpg"
        alt="Social Media Design"
        className="w-full h-64 object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-bold">
          Social Media Design
        </h3>

        <p className="mt-2 text-gray-600">
          Creative content for digital platforms.
        </p>
      </div>

    </div>



    {/* Project 4 */}
    <div className="rounded-3xl overflow-hidden bg-gray-50">

      <img
        src="/images/poster-1.jpg.jpg"
        alt="Poster Design"
        className="w-full h-64 object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-bold">
          Poster Design
        </h3>

        <p className="mt-2 text-gray-600">
          Professional marketing designs.
        </p>
      </div>

    </div>



    {/* Project 5 */}
    <div className="rounded-3xl overflow-hidden bg-gray-50">

      <img
        src="/images/package-1.jpg.jpg"
        alt="Packaging Design"
        className="w-full h-64 object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-bold">
          Packaging Design
        </h3>

        <p className="mt-2 text-gray-600">
          Attractive product packaging concepts.
        </p>
      </div>

    </div>



    {/* Project 6 */}
    <div className="rounded-3xl overflow-hidden bg-gray-50">

      <img
        src="/images/ai-1.jpg.jpg"
        alt="AI Creative Design"
        className="w-full h-64 object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-bold">
          AI Creative Design
        </h3>

        <p className="mt-2 text-gray-600">
          Modern designs powered by AI tools.
        </p>
      </div>

    </div>


  </div>

</section>
{/* About */}
<section className="max-w-6xl mx-auto px-8 py-20">
<section id="about" className="max-w-6xl mx-auto px-8 py-20"></section>
  <div className="grid md:grid-cols-2 gap-12 items-center">

    <div>
      <h2 className="text-4xl font-bold">
        About SJAD Studio
      </h2>

      <p className="mt-6 text-gray-600 leading-8">
        SJAD Studio is a creative design studio focused on
        building modern brands and digital experiences.
        We help businesses with branding, graphic design,
        and creative solutions.
      </p>

      <p className="mt-4 text-gray-600 leading-8">
        Our goal is to create clean, professional and
        memorable designs that help brands stand out.
      </p>
    </div>


    <div className="h-80 rounded-3xl bg-gray-100 flex items-center justify-center">
      <span className="text-gray-500">
        SJAD Studio Creative Space
      </span>
    </div>

  </div>
b
</section>
{/* About Section */}

<section
  id="about"
  className="max-w-6xl mx-auto px-8 py-20"
>

  <div className="grid md:grid-cols-2 gap-12 items-center">


    <div>

      <h2 className="text-4xl font-bold">
        About SJAD Studio
      </h2>


      <p className="mt-6 text-gray-600 leading-8">
        SJAD Studio is a creative design studio focused on
        building modern visual identities, brand designs,
        and digital experiences for businesses worldwide.
      </p>


      <p className="mt-4 text-gray-600 leading-8">
        We combine creativity, strategy, and modern design
        techniques to create meaningful brands that stand out.
      </p>


    </div>



    <div className="grid grid-cols-2 gap-4">


      <div className="p-6 rounded-2xl bg-gray-100">
        <h3 className="text-2xl font-bold">
          5+
        </h3>
        <p>
          Design Skills
        </p>
      </div>


      <div className="p-6 rounded-2xl bg-gray-100">
        <h3 className="text-2xl font-bold">
          Global
        </h3>
        <p>
          Client Focus
        </p>
      </div>


      <div className="p-6 rounded-2xl bg-gray-100">
        <h3 className="text-2xl font-bold">
          Creative
        </h3>
        <p>
          Solutions
        </p>
      </div>


      <div className="p-6 rounded-2xl bg-gray-100">
        <h3 className="text-2xl font-bold">
          24/7
        </h3>
        <p>
          Communication
        </p>
      </div>


    </div>


  </div>

</section>
{/* Contact Section */}

<section
  id="contact"
  className="max-w-6xl mx-auto px-8 py-20"
>

  <div className="text-center">

    <h2 className="text-4xl font-bold">
      Let's Work Together
    </h2>


    <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
      Have a project in mind?
      Contact SJAD Studio and let's create something amazing.
    </p>


    <div className="mt-10 flex flex-col md:flex-row justify-center gap-5">


      <a
        href="aijborysjad5@gmail.com"
        className="px-8 py-3 rounded-full bg-black text-white"
      >
        Email Me
      </a>


      <a
        href="https://wa.me/qr/DLBLZLGYQHZUG1"
        className="px-8 py-3 rounded-full border border-black"
      >
        WhatsApp
      </a>


      <a
        href="www.linkedin.com/in/sjad-aijbory-9981b32a4"
        className="px-8 py-3 rounded-full border border-black"
      >
        LinkedIn
      </a>


    </div>

  </div>


</section>
{/* Footer */}

<footer className="bg-black text-white mt-20">

  <div className="max-w-6xl mx-auto px-8 py-12">


    <div className="grid md:grid-cols-3 gap-8">


      {/* Brand */}
      <div>

        <h3 className="text-2xl font-bold">
          SJAD Studio
        </h3>

        <p className="mt-4 text-gray-400">
          Creative design solutions for modern brands
          worldwide.
        </p>

      </div>



      {/* Links */}
      <div>

        <h4 className="font-semibold mb-4">
          Quick Links
        </h4>


        <div className="space-y-2 text-gray-400">

          <a href="#" className="block">
            Home
          </a>

          <a href="#services" className="block">
            Services
          </a>

          <a href="#portfolio" className="block">
            Portfolio
          </a>

          <a href="#contact" className="block">
            Contact
          </a>

        </div>

      </div>



      {/* Social */}
      <div>

        <h4 className="font-semibold mb-4">
          Connect
        </h4>


        <div className="space-y-2 text-gray-400">

          <p>
            LinkedIn
          </p>

          <p>
            Behance
          </p>

          <p>
            Instagram
          </p>

        </div>

      </div>


    </div>



    <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">

      © 2026 SJAD Studio. All rights reserved.

    </div>


  </div>

</footer>
</main>
);
}