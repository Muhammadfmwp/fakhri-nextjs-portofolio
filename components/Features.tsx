import Image from "next/image";
import { default as nextConfig } from "../next.config.mjs";

const Features = () => {
  return (
    <section className="text-gray-600 body-font dark:bg-slate-900  ">
      <div className="container px-5 py-3 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl dark:text-white  text-2xl font-medium title-font mb-4 text-gray-900">
            Skills and Tools
          </h1>
          <p className="lg:w-2/3 text-slate-500 dark:text-slate-40 mx-auto leading-relaxed text-base mb-2">
            Meniatkan diri untuk berpuasa.
          </p>
          <p className="mb-1">
            نَوَيْتُ صَوْمَ غَدٍ عَنْ اَدَاءِ فَرْضِ شَهْرِ رَمَضَانَ هذِهِ
            السَّنَةِ ِللهِ تَعَالَى
          </p>
          <p>
            "Nawaitu shauma ghodin 'an adaa'i fardhi syahri romadhoona
            hadihis-sanati lillahi ta'aalaa."
          </p>
        </div>
        <div className="flex flex-wrap m-10">
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <Image
                src="https://dummyimage.com/84x84"
                width={500}
                height={500}
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium dark:text-white">
                  Holden Caulfield
                </h2>
                <p className="text-gray-500">UI Designer</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <Image
                src="https://dummyimage.com/84x84"
                width={500}
                height={500}
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium dark:text-white">
                  Henry Letham
                </h2>
                <p className="text-gray-500">CTO</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <Image
                src="https://dummyimage.com/88x88"
                width={500}
                height={500}
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium dark:text-white">
                  Oskar Blinde
                </h2>
                <p className="text-gray-500">Founder</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <Image
                src="https://dummyimage.com/90x90"
                width={500}
                height={500}
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium dark:text-white">
                  John Doe
                </h2>
                <p className="text-gray-500">DevOps</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <Image
                src="https://dummyimage.com/94x94"
                width={500}
                height={500}
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium dark:text-white">
                  Martin Eden
                </h2>
                <p className="text-gray-500">Software Engineer</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <Image
                src="https://dummyimage.com/98x98"
                width={500}
                height={500}
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium dark:text-white">
                  Boris Kitua
                </h2>
                <p className="text-gray-500">UX Researcher</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <Image
                src="https://dummyimage.com/100x90"
                width={500}
                height={500}
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium dark:text-white">
                  Atticus Finch
                </h2>
                <p className="text-gray-500">QA Engineer</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <Image
                src="https://dummyimage.com/104x94"
                width={500}
                height={500}
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium dark:text-white">
                  Alper Kamu
                </h2>
                <p className="text-gray-500">System</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <Image
                src="https://dummyimage.com/108x98"
                width={500}
                height={500}
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium dark:text-white">
                  Rodrigo Monchi
                </h2>
                <p className="text-gray-500">Product Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
