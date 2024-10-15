import React from 'react';

const Footer = () => {
  return (
    <div className="bg-lime-950 text-white py-8"> 
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between text-center">
        <div className="mb-2 md:mb-0"> 
          <h3 className="text-2xl">Share</h3>
          <h3 className="mt-1 mb-2">. . . . . . . . . . . </h3> 
          <div className="flex flex-col items-center">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white">Twitter</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white">Facebook</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white">LinkedIn</a>
            <a href="https://news.ycombinator.com" target="_blank" rel="noopener noreferrer" className="text-white">Hacker News</a>
            <a href="https://reddit.com" target="_blank" rel="noopener noreferrer" className="text-white">Reddit</a>
          </div>
        </div>

        <div className="mb-2 md:mb-0"> 
          <h3 className="text-2xl">Follow</h3>
          <h3 className="mt-1 mb-2">. . . . . . . . . . . </h3> 
          <div className="flex flex-col items-center">
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-white">Discord</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white">Twitter</a>
            <a href="https://mastodon.social" target="_blank" rel="noopener noreferrer" className="text-white">Mastodon</a>
            <a href="https://bsky.app" target="_blank" rel="noopener noreferrer" className="text-white">Bluesky</a>
            <a href="https://reddit.com" target="_blank" rel="noopener noreferrer" className="text-white">Reddit</a>
            <a href="mailto:example@example.com" className="text-white">Email</a>
          </div>
        </div>

        <div>
          <h3 className="text-2xl">Legal</h3>
          <h3 className="mt-1 mb-2">. . . . . . . . . . . </h3> 
          <div className="flex flex-col items-center">
            <a href="/terms" className=" text-white">Terms</a>
            <a href="/privacy" className=" text-white">Privacy</a>
            <a href="/guidelines" className=" text-white">Guidelines</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
