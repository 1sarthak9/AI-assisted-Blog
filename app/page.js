"use client"
import { Button } from "@/components/ui/button"
import Typed from 'typed.js';
import React, {useRef, useEffect} from 'react';

export default function Home() {
    // Create reference to store the DOM element containing the animation
    const el = useRef(null);

    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['Coding', 'Web Development', 'Software Engineering', 'Data Science', 'Life'],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
      });
  
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []); 

  return (
    <main>
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            A free<span className="font-semibold"> Blog Website </span> Curated by an Engineer-Sarthak. <br className="hidden lg:block" /> Currently woring on <span className="font-semibold underline decoration-primary"><span ref={el} /></span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            This blog website showcase different <b>Projects</b> designed by me , also consist of different <b>Blogs</b> that i wrote in free time. <br className="hidden lg:block" />
          </p>
          <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
            <form action="https://www.creative-tim.com/twcomponents/search" className="flex flex-wrap justify-between md:flex-row">
             
            </form>
          </div>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <img src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg" alt="tailwind css components" className="w-full h-full max-w-md mx-auto" />
        </div>
      </section>

<section className="py-12 bg-gray-100 dark:bg-gray-900">
  <div className="container px-4 mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Pricing Plans</h2>
      <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Choose the plan that suits you best</p>
    </div>
    <div className="flex flex-wrap justify-center">
      {/* Basic Plan */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Basic</h3>
          <p className="mt-4 text-gray-500 dark:text-gray-300">$10/month</p>
          <ul className="mt-6 mb-6 space-y-4">
            <li className="text-gray-600 dark:text-gray-400"><s>10GB Storage</s></li>
            <li className="text-gray-600 dark:text-gray-400"><s>Basic Support</s></li>
            <li className="text-gray-600 dark:text-gray-400"><s>Single User</s></li>
            <li className="text-gray-600 dark:text-gray-400">Community Access</li>
            <li className="text-gray-600 dark:text-gray-400">Weekly Updates</li>
          </ul>
          <Button className="mx-1" variant="outline">Choose Plan</Button>
        </div>
      </div>
      {/* Standard Plan */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center border-2 border-purple-500">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Standard</h3>
          <p className="mt-4 text-gray-500 dark:text-gray-300">$20/month</p>
          <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-purple-500 rounded-full">Bestseller</span>
          <ul className="mt-6 mb-6 space-y-4">
            <li className="text-gray-600 dark:text-gray-400">50GB Storage</li>
            <li className="text-gray-600 dark:text-gray-400">Priority Support</li>
            <li className="text-gray-600 dark:text-gray-400">Up to 5 Users</li>
            <li className="text-gray-600 dark:text-gray-400">Community Access</li>
            <li className="text-gray-600 dark:text-gray-400">Daily Updates</li>
          </ul>
          <Button className="mx-1" variant="outline">Choose Plan</Button>
        </div>
      </div>
      {/* Premium Plan */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Premium</h3>
          <p className="mt-4 text-gray-500 dark:text-gray-300">$30/month</p>
          <ul className="mt-6 mb-6 space-y-4">
            <li className="text-gray-600 dark:text-gray-400">200GB Storage</li>
            <li className="text-gray-600 dark:text-gray-400">24/7 Support</li>
            <li className="text-gray-600 dark:text-gray-400">Unlimited Users</li>
            <li className="text-gray-600 dark:text-gray-400">Community Access</li>
            <li className="text-gray-600 dark:text-gray-400">Real-time Updates</li>
          </ul>
          <Button className="mx-1" variant="outline">Choose Plan</Button>
        </div>
      </div>
    </div>
  </div>
</section>



 <section className="py-12 bg-white dark:bg-gray-900">
  <div className="container px-4 mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">What Our Readers Say--</h2>
      <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Hear from our satisfied readers/Users.</p>
    </div>
    <div className="flex flex-wrap justify-center">
      {/* Testimonial 1 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
          <p className="text-gray-600 dark:text-gray-400">"These blogs are intersting and help me utilize my free time.Sometimes I recommend it to my friends who like reading."</p>
          <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Nilesh</h3>
        </div>
      </div>
      {/* Testimonial 2 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
          <p className="text-gray-600 dark:text-gray-400">"Amazing experience! The guy was professional and the results were outstanding."</p>
          <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Gautam</h3>
        </div>
      </div>
      {/* Testimonial 3 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
          <p className="text-gray-600 dark:text-gray-400">"Exceptional service and support. We couldn't be happier with the results."</p>
          <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Brown</h3>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="py-12 bg-gray-100 dark:bg-gray-900">
  <div className="container px-4 mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Most Liked Blogs</h2>
      <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Check out our most popular blog posts</p>
    </div>
    <div className="flex flex-wrap justify-center">
      {/* Blog 1 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
          <img src="/eng-life.jpeg" className="w-full h-64 object-cover rounded-t-lg"/>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">The Engineer’s Diary</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Ever spent hours debugging only to realize it was a tiny typo? Welcome to the club. In this post, I share one of my most frustrating yet hilarious coding experiences, what it taught me, and why sometimes stepping away from the screen is the smartest move.</p>
            <Button className="m-2" variant="outline" href="/blog-post-1">Read More</Button>
          </div>
        </div>
      </div>
      {/* Blog 2 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
          <img src="./kitchen.jpg" alt="Blog 2" className="w-full h-64 object-cover rounded-t-lg"/>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200"> Kitchen Debugged</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Cooking is just debugging hunger with taste. In this post, I share a quick 15-minute masala pasta recipe perfect for late-night coding sessions or post-class cravings. No fancy tools, just pantry basics, and a lot of flavor. Because coders need fuel too—delicious fuel.</p>
            <Button className="m-2" variant="outline" href="/blog-post-2">Read More</Button>
          </div>
        </div>
      </div>
      {/* Blog 3 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
          <img src="./micro-mm.png" alt="Blog 3" className="w-full h-64 object-cover rounded-t-lg"/>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Micro-Moments: The Beauty</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">After hours of battling bugs and logic loops, I stepped outside—and it felt like I rebooted myself. This post reflects on the calm that follows chaos, how evening walks clear mental cache, and why sometimes the best ideas hit when you're not even trying.</p>
            <Button className="m-2" variant="outline" href="/blog-post-3">Read More</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </main>
  );
};








