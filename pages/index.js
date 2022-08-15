import Head from 'next/head'
import { useState, useEffect } from 'react';
import * as hexToRGB from 'pretty-easy-hex-to-rgb';

export default function Home() {

  // Global State

  const [engine, setEngine] = useState(typeof window !== 'undefined' ? localStorage.getItem('engine') : "google");
  const [bgColor, setbgColor] = useState(typeof window !== 'undefined' ? localStorage.getItem('bgColor') : "#ffffff");
  const [textColor, settextColor] = useState(typeof window !== 'undefined' ? localStorage.getItem('textColor') : "#000000");
  const [secondColor, setsecondColor] = useState(typeof window !== 'undefined'? localStorage.getItem('secondColor') : "#212121");
  const [bottomOpacity, setbottomOpacity] = useState(typeof window !== 'undefined' ? localStorage.getItem('bottomOpacity') : "0.5");
  const [settings, toggleSettings] = useState(false);
  const [menu, toggleMenu] = useState(false);
  const [add, toggleAdd] = useState(false);
  const [searchColor, setsearchColor] = useState(typeof window !== 'undefined' ? localStorage.getItem('searchColor') : "#ffffff");
  const [stextColor, setstextColor] = useState(typeof window !== 'undefined' ? localStorage.getItem('stextColor') : "#000000");
  const [searchOpacity, setsearchOpacity] = useState(typeof window !== 'undefined' ? localStorage.getItem('searchOpacity') : "0.8");
  const [links, setlinks] = useState(typeof window !== 'undefined' ? (localStorage.getItem('links') ? JSON.parse(localStorage.getItem('links')) : []) : []);
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  var bgColorO = "rgba(" + hexToRGB(bgColor)[0] + "," + hexToRGB(bgColor)[0] + "," + hexToRGB(bgColor)[0] + "," + bottomOpacity+ ")";
  var searchColorO = "rgba(" + hexToRGB(searchColor)[0] + "," + hexToRGB(searchColor)[0] + "," + hexToRGB(searchColor)[0] + "," + searchOpacity+ ")";

  // Manage Basic Global State

  if (bgColor == '') {setbgColor('#');}
  if (textColor == '') {settextColor('#');}
  if (secondColor == '') {setsecondColor('#');}
  if (searchColor == '') {setsearchColor('#');}
  if (stextColor == '') {setstextColor('#');}

  // Set Defaults

  function setDefault() {
    setbgColor('#f4f4f4');
    settextColor('#212121');
    setsecondColor('#A8A8A8');
    setbottomOpacity(1);
    setsearchColor('#f4f4f4');
    setstextColor('#212121');
    setsearchOpacity(1);
  }

  // Handle Links

  function addLink() {
    if (links.length == 1 && links[0].length == 0) {
      setlinks([{name: name, link: link}]);
      localStorage.setItem('links', JSON.stringify([{name: name, link: link}]));
    } else {
      setlinks([...links, {name: name, link: link}]);
      localStorage.setItem('links', JSON.stringify([...links, {name: name, link: link}]));
    }
  }

  // Handle Bookmarks

  function renderLinks() {
    return links.map((link, index) => {
      return (
        <div key={index}>
          <span onClick={() => openURL(link.link)} className='cursor-pointer hover:font-bold transition ease-in'>{link.name}</span>
        </div>
      )
    })
  }

  // Time and Date Handling

  var hr = new Date().getHours();
  hr > 12 ? hr = hr - 12 : hr = hr;
  var time = hr + ':' + new Date().getMinutes();

  function month() {
    if (new Date().getMonth() == 0) { return 'January' }
    else if (new Date().getMonth() == 1) { return 'February' }
    else if (new Date().getMonth() == 2) { return 'March' }
    else if (new Date().getMonth() == 3) { return 'April' }
    else if (new Date().getMonth() == 4) { return 'May' }
    else if (new Date().getMonth() == 5) { return 'June' }
    else if (new Date().getMonth() == 6) { return 'July' }
    else if (new Date().getMonth() == 7) { return 'August' }
    else if (new Date().getMonth() == 8) { return 'September' }
    else if (new Date().getMonth() == 9) { return 'October' }
    else if (new Date().getMonth() == 10) { return 'November' }
    else if (new Date().getMonth() == 11) { return 'December' }
  }
  var date = new Date().getDate() + ' ' + month() + ' ' + new Date().getFullYear();

  // Background Image Handling

  const [url, setURL] = useState(typeof window !== 'undefined' ? (localStorage.getItem('bg') ? localStorage.getItem('bg') : "https://images.unsplash.com/photo-1643228995868-bf698f67d053") : "https://images.unsplash.com/photo-1643228995868-bf698f67d053");

  // Quote Handling

  const [quote, setQuote] = useState('Loading...');

  async function getQuote() {
    await fetch('https://api.quotable.io/random?tags=inspirational&maxLength=80')
      .then(response => response.json())
      .then(data => {
        setQuote('"' + data.content + '" - ' + data.author);
      }, (error) => {
        setQuote('No quote available')
      }  
    );
  }

  useEffect(() => {
    getQuote();
  }, []);

  // Input Handling

  const [input, setInput] = useState('')

  const handleChange = event => {
    setInput(event.target.value);
  };

  function setSearch() {
    var prompt = input;
    if (prompt == '') {
      null
    } else { 
      if (engine == 'google') {
        window.location.href = 'https://www.google.com/search?q=' + prompt;
      } else if (engine == 'duckduckgo') {
        window.location.href = 'https://duckduckgo.com/?q=' + prompt;
      } else if (engine == 'bing') {
        window.location.href = 'https://www.bing.com/search?q=' + prompt;
      }
    }
  }

  function openURL(url) {
    if (url == '' || url == ' ' || url == undefined) {
      null
    } else {
        if (typeof window !== 'undefined') {
          window.location.href = url;
        } else if (typeof window !== 'undefined') {
          window.location.href = 'http://' + url;
        }
    }
  }

  // Save State

  function saveState() {
      if (typeof window !== 'undefined') {
        localStorage.setItem('bgColor', bgColor);
        localStorage.setItem('textColor', textColor);
        localStorage.setItem('secondColor', secondColor);
        localStorage.setItem('bottomOpacity', bottomOpacity);
        localStorage.setItem('searchColor', searchColor);
        localStorage.setItem('stextColor', stextColor);
        localStorage.setItem('searchOpacity', searchOpacity);
        localStorage.setItem('engine', engine);
        localStorage.setItem('links', JSON.stringify(links));
        localStorage.setItem('bg', url);
      }
  };

  return (
    <div className='w-screen h-screen relative overflow-hidden'>
      <div className='w-screen h-screen absolute top-0 left-0 bg-cover z-0' style={{backgroundImage: "url('" + url + "')"}}></div>
      <div className='w-screen h-screen absolute top-0 left-0 z-20'>
        <div className='flex h-full'>
          <div className='m-auto max-w-lg animate__animated animate__fadeIn'>
            <form className='w-full' onSubmit={(e) => {e.preventDefault(), setSearch()}}>
              <input onChange={handleChange} value={input} type='text' style={{backgroundColor: searchColorO, color: stextColor}} className='w-[516px] rounded-lg p-2.5' placeholder='Search' />
            </form>
          </div>
        </div>
      </div>

      <div className='w-12 h-10 absolute top-6 right-0 z-30 rounded-l-lg' style={{backgroundColor: bgColorO, color: textColor}}>
        <div className='flex h-full items-center p-2 justify-between'>
          <svg onClick={() => toggleMenu(n => !n)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-grid hidden"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
          <svg onClick={() => toggleMenu(n => !n)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </div>
      </div>

      <div className={`max-w-xs h-96 w-full z-50 absolute top-24 right-4 rounded-lg p-4 bg-[#101010] text-[#f4f4f4] ${menu ? "block animate__animated animate__fadeInRight" : "animate__animated animate__fadeOutRight"}`}>
        <div className='flex justify-between'>
          <h1 className='text-2xl font-bold'>Quick Links</h1>
          <svg onClick={() => toggleAdd(n => !n)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus-circle"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
        </div>
        <hr className='my-1'></hr> 
        <div className='space-y-4 overflow-y-scroll h-[300px] pr-2'>
          <div className={`space-y-2 pr-2 py-1 ${add ? "animate__animated animate__fadeInDown block" : "animate__animated animate__fadeOutUp hidden"}`}>
            <div className='w-full'>
              <p className='text-sm'>Name</p>
              <input onChange={(e) => setName(e.target.value)} value={name} type='text' className='bg-gray-50 text-black w-full rounded-lg text-base p-2 border border-gray-300 transition ease-in focus:outline-none' placeholder='Name' />
            </div>
            <div className='w-full'>
              <p className='text-sm'>Link URL</p>
              <input onChange={(e) => setLink(e.target.value)} value={link} type='text' className='bg-gray-50 text-black w-full rounded-lg text-base p-2 border border-gray-300 transition ease-in focus:outline-none' placeholder='URL' />
            </div>
            <button onClick={() => addLink()} type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Add Links</button>
            <hr className='my-1'></hr>
          </div>

          {renderLinks()}
        </div>
      </div>

      <div className='w-screen px-4 h-12 absolute bottom-4 left-0 z-30 animate__animated animate__fadeInUp'>
        <div className='flex h-full rounded-lg' style={{backgroundColor: bgColorO}}>
          <div className='flex items-center w-full justify-between px-4'>
            <div className='flex gap-3 md:w-64' style={{color: textColor}}>
              <p>{time}</p>
              <p className='pl-3 border-l-[3px] border-neutral-700'>{date}</p>
            </div>
            <div className='gap-3 lg:flex hidden'>
              <span className='text-sm italic' style={{color: secondColor}}>{quote}</span>
            </div>
            <div className='flex gap-3 md:w-64 justify-end' style={{color: textColor}}>
              <div className={`p-1 cursor-pointer hover:animate-pulse ${settings ? "bg-black/10 rounded-full" : ""}`} onClick={() => toggleSettings(n => !n)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-settings"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg></div>
            </div>
          </div>
        </div>
      </div>

      <div className={`max-w-sm h-96 w-full z-50 absolute bottom-20 right-4 rounded-lg p-4 bg-[#101010] text-[#f4f4f4] ${settings ? "block animate__animated animate__fadeInRight" : "animate__animated animate__fadeOutRight"}`}>
        <div className='flex justify-between'>
          <h1 className='text-2xl font-bold'>Settings</h1>
          <div className='flex gap-3'>
            <p className='cursor-pointer' onClick={() => saveState()}>Save</p>
            <p className='cursor-pointer' onClick={() => setDefault()}>Set default</p>
          </div>
        </div>
        <hr className='my-1'></hr> 
        <div className='space-y-4 overflow-y-scroll h-[300px] pr-2 py-4'>
          <div className='w-full pb-2'>
            <p className='mb-2'>Background Image URL</p>
            <input onChange={(e) => setURL(e.target.value)} value={url} type='text' className='bg-gray-50 w-full text-black rounded-lg text-base p-1 border border-gray-300 transition ease-in' placeholder='Hex Code' />
          </div>
          <div className='w-full pb-4'>
            <p className='mb-2'>Search Engine</p>
            <div className='md:grid md:grid-cols-3 text-sm gap-1'>
              <div className='p-2 hover:-translate-y-1 border cursor-pointer transition ease-in rounded-lg' onClick={() => setEngine('google')}>
                <p className={`${engine == 'google' ? "font-bold" : ""}`}>Google</p>
              </div>
              <div className='p-2 hover:-translate-y-1 border cursor-pointer transition ease-in rounded-lg' onClick={() => setEngine('bing')}>
                <p className={`${engine == 'bing' ? "font-bold" : ""}`}>Bing</p>
              </div>
              <div className='p-2 hover:-translate-y-1 border cursor-pointer transition ease-in rounded-lg' onClick={() => setEngine('duckduckgo')}>
                <p className={`${engine == 'duckduckgo' ? "font-bold" : ""}`}>DuckDuckGo</p>
              </div>
            </div>
          </div>
          <div className='flex justify-between w-full'>
            <p>Text Color</p>
            <input onChange={(e) => settextColor(e.target.value)} value={textColor} type='text' maxLength="7" className='bg-gray-50 text-black w-32 rounded-lg text-base p-1 border border-gray-300 transition ease-in' placeholder='Hex Code' />
          </div>
          <div className='flex justify-between w-full'>
            <p>Secondary Color</p>
            <input onChange={(e) => setsecondColor(e.target.value)} value={secondColor} type='text' maxLength="7" className='bg-gray-50 text-black w-32 rounded-lg text-base p-1 border border-gray-300 transition ease-in' placeholder='Hex Code' />
          </div>
          <div className='flex justify-between w-full'>
            <p>Bar Color</p>
            <input onChange={(e) => setbgColor(e.target.value)} value={bgColor} type='text' maxLength="7" className='bg-gray-50 text-black w-32 rounded-lg text-base p-1 border border-gray-300 transition ease-in' placeholder='Hex Code' />
          </div>
          <div className='flex justify-between w-full'>
            <p>Bar Opacity</p>
            <input onChange={(e) => setbottomOpacity(e.target.value)} value={bottomOpacity} type='number' maxLength="3" step="0.1" max="1" min="0" className='bg-gray-50 text-black w-32 rounded-lg text-base p-1 border border-gray-300 transition ease-in' placeholder='Hex Code' />
          </div>
          <div className='flex justify-between w-full'>
            <p>Search Text Color</p>
            <input onChange={(e) => setstextColor(e.target.value)} value={stextColor} type='text' maxLength="7" className='bg-gray-50 text-black w-32 rounded-lg text-base p-1 border border-gray-300 transition ease-in' placeholder='Hex Code' />
          </div>
          <div className='flex justify-between w-full'>
            <p>Search Bar Color</p>
            <input onChange={(e) => setsearchColor(e.target.value)} value={searchColor} type='text' maxLength="7" className='bg-gray-50 text-black w-32 rounded-lg text-base p-1 border border-gray-300 transition ease-in' placeholder='Hex Code' />
          </div>
          <div className='flex justify-between w-full'>
            <p>Search Bar Opacity</p>
            <input onChange={(e) => setsearchOpacity(e.target.value)} value={searchOpacity} type='number' maxLength="3" step="0.1" max="1" min="0" className='bg-gray-50 text-black w-32 rounded-lg text-base p-1 border border-gray-300 transition ease-in' placeholder='Hex Code' />
          </div>
        </div>
      </div>
    </div>
  )
}
