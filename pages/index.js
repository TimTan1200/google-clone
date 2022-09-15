import Head from 'next/head'
import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiTrash, FiChevronUp } from 'react-icons/fi';
import Card from '../components/Card'

export default function Home() {

  const getFromStorage = (key) => {
    if(typeof window !== 'undefined'){
      return window.localStorage.getItem(key)
    }
  }

  const setToStorage = (key,value) => {
    if(typeof window !== 'undefined'){
      window.localStorage.removeItem(key)
      return window.localStorage.setItem(key,value)
    } else {
      console.log("window is undefined")
    }
  }

  const clearStorage = () => {
    if(typeof window !== 'undefined'){
      localStorage.clear()
    }
  }

  function setTheme(type) {
    if (type == 1) {
      setBarBgColor('transparent'); setToStorage('barBgColor', 'transparent'); 
      setTextColor('#fff'); setToStorage('textColor', '#fff');
      setBg("https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-1.2.1&fit=crop&w=2000&q=100"); setToStorage('bg', 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-1.2.1&fit=crop&w=2000&q=100');
      setSearchBgColor('#fff'); setToStorage('searchBgColor', '#fff'); 
      setSearchTextColor('#000'); setToStorage('searchTextColor', '#000');
      setSearchBorderColor('#ffffff'); setToStorage('searchBorderColor', '#ffffff');
    } else if (type == 2) {
      setBarBgColor('#101010'); setToStorage('barBgColor', '#101010');
      setTextColor('#ffffff'); setToStorage('textColor', '#ffffff');
      setBg("https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-1.2.1&fit=crop&w=2000&q=100"); setToStorage('bg', 'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-1.2.1&fit=crop&w=2000&q=100');
      setSearchBgColor('#101010'); setToStorage('searchBgColor', '#101010'); 
      setSearchTextColor('#ffffff'); setToStorage('searchTextColor', '#ffffff');
      setSearchBorderColor('#101010'); setToStorage('searchBorderColor', '#101010');
    } else if (type == 3) {
      setBarBgColor('#101010'); setToStorage('barBgColor', '#101010');
      setSearchBgColor('#101010'); setToStorage('searchBgColor', '#101010');
      setTextColor('#cecece'); setToStorage('textColor', '#cecece');
      setBg("he"); setToStorage('bg', 'he');
      setSearchTextColor('#cecece'); setToStorage('searchTextColor', '#cecece');
      setSearchBorderColor('#ffffff'); setToStorage('searchBorderColor', '#ffffff');
    } else if (type == 4) {
      setBarBgColor('transparent'); setToStorage('barBgColor', 'transparent');
      setSearchBgColor('#ffffff'); setToStorage('searchBgColor', '#ffffff');
      setTextColor('#101010'); setToStorage('textColor', '#101010');
      setBg("https://images.unsplash.com/photo-1459695452562-46cc57bef5f6?ixlib=rb-1.2.1&fit=crop&w=2000&q=100"); setToStorage('bg', 'https://images.unsplash.com/photo-1459695452562-46cc57bef5f6?ixlib=rb-1.2.1&fit=crop&w=2000&q=100');
      setSearchTextColor('#212121'); setToStorage('searchTextColor', '#212121');
      setSearchBorderColor('#ffffff'); setToStorage('searchBorderColor', '#ffffff');
    } else if (type == 5) {
      setBarBgColor('transparent'); setToStorage('barBgColor', 'transparent');
      setSearchBgColor('#101010'); setToStorage('searchBgColor', '#101010');
      setTextColor('#ffffff'); setToStorage('textColor', '#ffffff');
      setBg("https://images.unsplash.com/photo-1597773150796-e5c14ebecbf5?ixlib=rb-1.2.1&fit=crop&w=2000&q=100"); setToStorage('bg', 'https://images.unsplash.com/photo-1597773150796-e5c14ebecbf5?ixlib=rb-1.2.1&fit=crop&w=2000&q=100');
      setSearchTextColor('#cecece'); setToStorage('searchTextColor', '#cecece');
      setSearchBorderColor('#ffffff'); setToStorage('searchBorderColor', '#ffffff');
    } else if (type == 6) {
      setBarBgColor('transparent'); setToStorage('barBgColor', 'transparent');
      setSearchBgColor('#101010'); setToStorage('searchBgColor', '#101010');
      setTextColor('#ffffff'); setToStorage('textColor', '#ffffff');
      setBg("https://images.unsplash.com/photo-1637422234670-392e0dc5bdc7?ixlib=rb-1.2.1&fit=crop&w=2000&q=100"); setToStorage('bg', 'https://images.unsplash.com/photo-1637422234670-392e0dc5bdc7?ixlib=rb-1.2.1&fit=crop&w=2000&q=100');
      setSearchTextColor('#B91C1C'); setToStorage('searchTextColor', '#B91C1C');
      setSearchBorderColor('#B91C1C'); setToStorage('searchBorderColor', '#B91C1C');
    }
  }

  // Theme State

  const [barBgColor, setBarBgColor] = useState('transparent');
  const [textColor, setTextColor] = useState('#fff');
  const [bg, setBg] = useState("https://images.unsplash.com/photo-1497436072909-60f360e1d4b1");
  const [searchBgColor, setSearchBgColor] = useState('#fff');
  const [searchTextColor, setSearchTextColor] = useState('#000');
  const [searchBorderColor, setSearchBorderColor] = useState('#ffffff');
  const [engine, setEngine] = useState(1);

  // Function State

  const [manage, setManage] = useState(false);
  const [input, setInput] = useState('');
  const [menu, setMenu] = useState(false);
  const [mode, setMode] = useState(1);
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [links, setlinks] = useState([]);

  useEffect(() => {
    getFromStorage('barBgColor') ? setBarBgColor(getFromStorage('barBgColor')) : 'transparent';
    getFromStorage('searchBorderColor') ? setSearchBorderColor(getFromStorage('searchBorderColor')) : '#fff';
    getFromStorage('textColor') ? setTextColor(getFromStorage('textColor')) : '#fff';
    getFromStorage('bg') ? setBg(getFromStorage('bg')) : "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1";
    getFromStorage('searchBgColor') ? setSearchBgColor(getFromStorage('searchBgColor')) : '#fff';
    getFromStorage('searchTextColor') ? setSearchTextColor(getFromStorage('searchTextColor')) : '#000';
    getFromStorage('links') ? setlinks(JSON.parse(getFromStorage('links'))) : setlinks([]);
    getFromStorage('barBgColor') ? setBarBgColor(getFromStorage('barBgColor')) : 'transparent';
    getFromStorage('engine') ? setEngine(getFromStorage('engine')) : 1;
  }, [])

  const handleChange = event => {
    setInput(event.target.value);
  };

  // handle overlay transition
  useEffect(() => {
    if (menu) { document.getElementById('layer').style.display = 'block';
    } else { setTimeout(() => { document.getElementById('layer').style.display = 'none' }, 800) };
  }, [menu])

  useEffect(() => {
    if (manage) { document.getElementById('books').style.display = 'block';
    } else if (!manage && mode == 1) { 
      setTimeout(() => { document.getElementById('books').style.display = 'none' }, 600) 
    } else {
      null
    }
  }, [manage])

  var hr = new Date().getHours();
  var mn = new Date().getMinutes()
  var bl = hr > 12 ? 'PM' : 'AM';
  hr > 12 ? hr = hr - 12 : hr = hr;
  hr < 10 ? hr = '0' + hr : hr = hr;
  mn < 10 ? mn = '0' + mn : mn = mn;
  var time = hr + ':' + mn + ' ' + bl;

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

  function addLink() {
    if (links.length == 1 && links[0].length == 0) {
      setlinks([{name: name, link: link}]);
      setToStorage('links', JSON.stringify([{name: name, link: link}]));
    } else {
      setlinks([...links, {name: name, link: link}]);
      setToStorage('links', JSON.stringify([...links, {name: name, link: link}]));
    }
  }

  function removeLink(name) {
    var newLinks = links.filter((link) => link.name != name);
    setlinks(newLinks);
    setToStorage('links', JSON.stringify(newLinks));
  }

  function clearLinks() {
    clearStorage();
    setlinks([]);
  }

  function renderLinks() {
    return links.map((link, index) => {
      return (
        <div key={index} className="bg-black block border-2 cursor-pointer hover:font-bold rounded-full border-neutral-600 text-white hover:border-red-500 font-medium text-sm px-5 w-full transition-all ease-in">
          <div className='flex items-center'>
            <span onClick={() => openURL(link.link)} className="flex-grow py-1.5">{link.name}</span>
            <div onClick={() => removeLink(link.name)} className='hover:text-red-500 transition-all ease-in'><FiTrash fontSize={18} /></div>
          </div>
        </div>
      )
    })
  }

  function openURL(url) {
    var domain = url.substring(0,7)
    if (url == '' || url == ' ' || url == undefined) {
      console.log('URL empty');
    } else {
        if (typeof window !== 'undefined') {
          domain == "http://" || domain == "https://" ? window.location.href = url : window.location.href = "http://" + url;
        }
    }
  }
      

  function setSearch() {
    var prompt = input;
    if (prompt == '') { null
    } else { 
      if (engine == 1) { window.location.href = 'https://www.google.com/search?q=' + prompt;
      } else if (engine == 2) { window.location.href = 'https://www.bing.com/search?q=' + prompt;
      } else if (engine == 3) { window.location.href = 'https://duckduckgo.com/?q=' + prompt;
      } else if (engine == 4) { window.location.href = 'https://www.ecosia.org/search?method=index&q=' + prompt;
      } else { window.location.href = 'https://www.google.com/search?q=' + prompt;
      }}}

  return (
    <div className='w-screen h-screen overflow-hidden relative bg-[#101010] bg-cover bg-center' style={{backgroundImage: 'url("' + bg + '")'}}>
      <Head>
        <title>Googl by Tanvir Bhachu</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* Navbar */}

      <div className='bg-black w-full flex items-center md:justify-between justify-end px-5 py-2 absolute top-0 z-10' style={{color: textColor, backgroundColor: barBgColor}}>
        <div className='font-bold md:block hidden'>
          <span>{date}  |  {time}</span>
        </div>
        <div className='cursor-pointer' onClick={() => setMenu(true)}>
          <FiMenu size={30} />
        </div>
      </div>

      {/* Search Bar */}

      <div className='w-full h-full flex justify-center items-center'>
        <form className='max-w-lg w-full mx-auto mt-4 relative flex' onSubmit={(e) => {e.preventDefault(), setSearch()}}>
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style={{color: searchTextColor}} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </div>
          <input placeholder='Search' onChange={handleChange} value={input} type='text' style={{backgroundColor: searchBgColor, color: searchTextColor, borderColor: searchBorderColor}} className='w-full rounded-full p-2.5 pl-10 border-2 focus:border-gray-700 outline-none transition-all ease-in' />
        </form>
      </div>

      {/* Menu */}

      <div id="layer" className={`absolute top-0 left-0 right-0 bottom-0 w-full h-screen z-20 ${menu ? "block" : ""}`}>
        <div className='relative w-full h-full'>
          <div className={`bg-black/50 h-full w-full ${menu ? "block animate__animated animate__fadeIn animate__delay-05s" : "animate__animated animate__fadeOut"}`} onClick={() => setMenu(false)}></div>
          <div className={`bg-[#101010] md:w-[400px] w-screen h-full absolute top-0 right-0 ${menu ? "block animate__animated animate__slideInRight animate__delay-05s" : "animate__animated animate__slideOutRight animate__fast"}`}>
            
            {/* Menu Header */}
            
            <div className='w-full flex items-center justify-between px-5 py-2 text-white'>
              <div className='flex justify-center items-center w-full md:w-3/4 text-center'>
                <div className='h-full flex-1 w-full cursor-pointer' onClick={() => setMode(1)}>
                  <span className="h-full">Bookmarks</span>
                  <div className={`h-1 bg-red-500 rounded-full w-full ${mode == 1 ? "block animate__animated animate__slideInRight animate__fast" : "animate__animated animate__slideOutRight animate__fast"}`}></div>
                </div>
                <div className='h-full flex-1 w-full cursor-pointer' onClick={() => setMode(2)}>
                  <span className="h-full">Settings</span>
                  <div className={`h-1 bg-red-500 rounded-full w-full ${mode == 2 ? "block animate__animated animate__slideInLeft animate__fast" : "animate__animated animate__slideOutLeft animate__fast"}`}></div>
                </div>
              </div>
              <div className='group cursor-pointer' onClick={() => setMenu(false)}>
                <div className='group-hover:rotate-90 transition-all ease-in duration-300'>
                  <FiX size={30} />
                </div>
              </div>
            </div>

            {/* Menu Body */}

            {mode == 1 ? (
              <div className='h-full flex flex-col'>
                <div className='flex text-white cursor-pointer items-center px-5 gap-3 justify-end py-2 hover:text-red-500 transition-all ease-in'>
                  <div className={`${manage ? 'rotate-180' : 'rotate-0'}`}>
                    <FiChevronUp fontSize={20} />
                  </div>
                  <span className='text-right font-bold' onClick={() => setManage(n => !n)}>Add Bookmark</span>
                </div>
                <div id="books" className={`space-y-2 w-full pr-2 p-5 pt-0 text-white flex flex-col justify-center items-center overflow-hidden ${manage ? "block animate__animated animate__slideInRight" : "hidden animate__animated animate__slideOutRight"}`}>
                  <div className='w-full'>
                    <p className='text-sm'>Title</p>
                    <input onChange={(e) => setName(e.target.value)} value={name} type='text' className='bg-black text-white w-full rounded-full text-base p-1 px-4 border-2 border-neutral-600 transition ease-in focus:outline-none focus:border-red-500' placeholder='Name' />
                  </div>
                  <div className='w-full'>
                    <p className='text-sm'>Link URL</p>
                    <input onChange={(e) => setLink(e.target.value)} value={link} type='text' className='bg-black text-white w-full rounded-full text-base p-1 px-4 border-2 border-neutral-600 transition ease-in focus:outline-none focus:border-red-500' placeholder='URL' />
                  </div>
                  <div>
                    <button onClick={() => addLink()} type="button" className="bg-black border-2 rounded-full border-neutral-600 text-white hover:border-red-500 font-medium text-sm px-5 py-1.5 mr-2 mb-2 w-fit transition-all ease-in">Add Link</button>
                    <button onClick={() => clearLinks()} type="button" className="bg-black border-2 rounded-full border-neutral-600 text-white hover:border-red-500 hover:bg-red-500 hover:text-black font-medium text-sm px-5 py-1.5 mr-2 mb-2 w-fit transition-all ease-in">Clear All Links</button>
                  </div>
                  <div className='border-neutral-600 border-b-2 bg-neutral-600 rounded-full w-full'></div>
                </div>
                <div className='flex-grow w-full p-5 pb-16 space-y-2 overflow-y-scroll overflow-hidden'>
                  {renderLinks()}
                </div>
              </div>
            ) : (
              <div className='h-full w-full flex flex-col px-5 pb-20 text-white overflow-y-scroll'>
                <span className='font-bold mb-2'>Built-In Themes</span>
                <div className='bg-[#ffffff] bg-[#000000] bg-[#B91C1C]'></div>
                <div className='grid grid-cols-2 gap-2'>
                  <Card mode="theme" action={() => setTheme(1)} title="Default" color="#ffffff" url="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1" />
                  <Card mode="theme" action={() => setTheme(2)} title="Japanese" color="#101010" url="https://images.unsplash.com/photo-1528164344705-47542687000d" />
                  <Card mode="theme" action={() => setTheme(3)} title="Matte" color="#000000" url="" />
                  <Card mode="theme" action={() => setTheme(4)} title="Ice" color="#101010" url="https://images.unsplash.com/photo-1459695452562-46cc57bef5f6" />
                  <Card mode="theme" action={() => setTheme(5)} title="Abyss" color="#ffffff" url="https://images.unsplash.com/photo-1597773150796-e5c14ebecbf5" />
                  <Card mode="theme" action={() => setTheme(6)} title="Red Domain" color="#B91C1C" url="https://images.unsplash.com/photo-1637422234670-392e0dc5bdc7" />
                </div>
                <span className='font-bold mb-2 mt-8'>Search Engine</span>
                <div className='grid grid-cols-2 gap-2'>
                  <Card mode="engine" engine={engine} i={1} action={() => {setEngine(1); setToStorage('engine', 1)}} title="Google" />
                  <Card mode="engine" engine={engine} i={2} action={() => {setEngine(2); setToStorage('engine', 2)}} title="Bing" />
                  <Card mode="engine" engine={engine} i={3} action={() => {setEngine(3); setToStorage('engine', 3)}} title="DuckDuckGo" />
                  <Card mode="engine" engine={engine} i={4} action={() => {setEngine(4); setToStorage('engine', 4)}} title="Ecosia" />
                </div>
                <span className='font-bold mb-2 mt-8'>Custom Theming</span>
                <div className=''>
                <div className='w-full'>
                    <p className='text-sm mb-1 mt-2'>Custom Background Image</p>
                    <input onChange={(e) => setBg(e.target.value)} value={bg} type='text' className='bg-black text-white w-full rounded-full text-base p-1 px-4 border-2 border-neutral-600 transition ease-in focus:outline-none focus:border-red-500' placeholder='Name' />
                  </div>
                  <div className='w-full'>
                    <p className='text-sm mb-1 mt-2'>Bar Background Color</p>
                    <div className='flex items-center justify-between gap-2'>
                      <input onChange={(e) => setBarBgColor(e.target.value)} value={barBgColor} type='text' className='bg-black text-white w-full rounded-full text-base p-1 px-4 border-2 border-neutral-600 transition ease-in focus:outline-none focus:border-red-500' placeholder='Name' />
                      <div className='w-8 h-8 aspect-square rounded-full border-2 border-neutral-600' style={{backgroundColor: barBgColor}}></div>
                    </div>
                  </div>
                  <div className='w-full'>
                    <p className='text-sm mb-1 mt-2'>Bar Text Color</p>
                    <div className='flex items-center justify-between gap-2'>
                      <input onChange={(e) => setTextColor(e.target.value)} value={textColor} type='text' className='bg-black text-white w-full rounded-full text-base p-1 px-4 border-2 border-neutral-600 transition ease-in focus:outline-none focus:border-red-500' placeholder='Name' />
                      <div className='w-8 h-8 aspect-square rounded-full border-2 border-neutral-600' style={{backgroundColor: textColor}}></div>
                    </div>
                  </div>
                  <div className='w-full'>
                    <p className='text-sm mb-1 mt-2'>Search Background Color</p>
                    <div className='flex items-center justify-between gap-2'>
                      <input onChange={(e) => setSearchBgColor(e.target.value)} value={searchBgColor} type='text' className='bg-black text-white w-full rounded-full text-base p-1 px-4 border-2 border-neutral-600 transition ease-in focus:outline-none focus:border-red-500' placeholder='Name' />
                      <div className='w-8 h-8 aspect-square rounded-full border-2 border-neutral-600' style={{backgroundColor: searchBgColor}}></div>
                    </div>
                  </div>
                  <div className='w-full'>
                    <p className='text-sm mb-1 mt-2'>Search Text Color</p>
                    <div className='flex items-center justify-between gap-2'>
                      <input onChange={(e) => setSearchTextColor(e.target.value)} value={searchTextColor} type='text' className='bg-black text-white w-full rounded-full text-base p-1 px-4 border-2 border-neutral-600 transition ease-in focus:outline-none focus:border-red-500' placeholder='Name' />
                      <div className='w-8 h-8 aspect-square rounded-full border-2 border-neutral-600' style={{backgroundColor: searchTextColor}}></div>
                    </div>
                  </div>
                  <div className='w-full'>
                    <p className='text-sm mb-1 mt-2'>Search Border Color</p>
                    <div className='flex items-center justify-between gap-2'>
                      <input onChange={(e) => setSearchBorderColor(e.target.value)} value={searchBorderColor} type='text' className='bg-black text-white w-full rounded-full text-base p-1 px-4 border-2 border-neutral-600 transition ease-in focus:outline-none focus:border-red-500' placeholder='Name' />
                      <div className='w-8 h-8 aspect-square rounded-full border-2 border-neutral-600' style={{backgroundColor: searchBorderColor}}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
    </div>  
  )
}
