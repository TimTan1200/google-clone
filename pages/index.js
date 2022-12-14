import Head from 'next/head'
import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiTrash, FiChevronUp, FiEyeOff, FiEye, FiStar, FiChevronDown, FiXSquare, FiCheckSquare } from 'react-icons/fi';
import Card from '../components/Card'
import { HuePicker, ChromePicker } from 'react-color';

import {rgbaToHex} from 'hex-and-rgba/esm'

export default function Home() {

  const handleClick = (e) => {
    if (displayPicker == 0) {
      setDisplayPicker(e)
    } else if (displayPicker == e) {
      setDisplayPicker(0)
    } else {
      setDisplayPicker(e)
    }
  };

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

      setFavBgColor('#101010'); setToStorage('favBgColor', '#101010');
      setFavColor('#fff'); setToStorage('favColor', '#fff');
    } else if (type == 2) {
      setBarBgColor('#101010'); setToStorage('barBgColor', '#101010');
      setTextColor('#ffffff'); setToStorage('textColor', '#ffffff');
      setBg("https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-1.2.1&fit=crop&w=2000&q=100"); setToStorage('bg', 'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-1.2.1&fit=crop&w=2000&q=100');
      setSearchBgColor('#101010'); setToStorage('searchBgColor', '#101010'); 
      setSearchTextColor('#ffffff'); setToStorage('searchTextColor', '#ffffff');
      setSearchBorderColor('#101010'); setToStorage('searchBorderColor', '#101010');

      setFavBgColor('#101010'); setToStorage('favBgColor', '#101010');
      setFavColor('#FD1602'); setToStorage('favColor', '#FD1602');
    } else if (type == 3) {
      setBarBgColor('#101010'); setToStorage('barBgColor', '#101010');
      setSearchBgColor('#101010'); setToStorage('searchBgColor', '#101010');
      setTextColor('#cecece'); setToStorage('textColor', '#cecece');
      setBg("none"); setToStorage('bg', 'none');
      setSearchTextColor('#cecece'); setToStorage('searchTextColor', '#cecece');
      setSearchBorderColor('#ffffff'); setToStorage('searchBorderColor', '#ffffff');

      setFavBgColor('#101010'); setToStorage('favBgColor', '#101010');
      setFavColor('#cecece'); setToStorage('favColor', '#cecece');
    } else if (type == 4) {
      setBarBgColor('transparent'); setToStorage('barBgColor', 'transparent');
      setSearchBgColor('#ffffff'); setToStorage('searchBgColor', '#ffffff');
      setTextColor('#101010'); setToStorage('textColor', '#101010');
      setBg("https://images.unsplash.com/photo-1459695452562-46cc57bef5f6?ixlib=rb-1.2.1&fit=crop&w=2000&q=100"); setToStorage('bg', 'https://images.unsplash.com/photo-1459695452562-46cc57bef5f6?ixlib=rb-1.2.1&fit=crop&w=2000&q=100');
      setSearchTextColor('#212121'); setToStorage('searchTextColor', '#212121');
      setSearchBorderColor('#ffffff'); setToStorage('searchBorderColor', '#ffffff');

      setFavColor('#101010'); setToStorage('favColor', '#101010');
      setFavBgColor('#fff'); setToStorage('favBgColor', '#fff');
    } else if (type == 5) {
      setBarBgColor('transparent'); setToStorage('barBgColor', 'transparent');
      setSearchBgColor('#101010'); setToStorage('searchBgColor', '#101010');
      setTextColor('#ffffff'); setToStorage('textColor', '#ffffff');
      setBg("https://images.unsplash.com/photo-1597773150796-e5c14ebecbf5?ixlib=rb-1.2.1&fit=crop&w=2000&q=100"); setToStorage('bg', 'https://images.unsplash.com/photo-1597773150796-e5c14ebecbf5?ixlib=rb-1.2.1&fit=crop&w=2000&q=100');
      setSearchTextColor('#cecece'); setToStorage('searchTextColor', '#cecece');
      setSearchBorderColor('#ffffff'); setToStorage('searchBorderColor', '#ffffff');

      setFavBgColor('#101010'); setToStorage('favBgColor', '#101010');
      setFavColor('#fff'); setToStorage('favColor', '#fff');
    } else if (type == 6) {
      setBarBgColor('transparent'); setToStorage('barBgColor', 'transparent');
      setSearchBgColor('#000'); setToStorage('searchBgColor', '#000');
      setTextColor('#ffffff'); setToStorage('textColor', '#ffffff');
      setBg("https://images.unsplash.com/photo-1637422234670-392e0dc5bdc7?ixlib=rb-1.2.1&fit=crop&w=2000&q=100"); setToStorage('bg', 'https://images.unsplash.com/photo-1637422234670-392e0dc5bdc7?ixlib=rb-1.2.1&fit=crop&w=2000&q=100');
      setSearchTextColor('#B91C1C'); setToStorage('searchTextColor', '#B91C1C');
      setSearchBorderColor('#B91C1C'); setToStorage('searchBorderColor', '#B91C1C');

      setFavBgColor('#101010'); setToStorage('favBgColor', '#101010');
      setFavColor('#FD1602'); setToStorage('favColor', '#FD1602');
    }
  }

  function setBarBgColor(color) { sBarBgColor(color); setToStorage('barBgColor', color);}
  function setTextColor(color) { sTextColor(color); setToStorage('textColor', color);}
  function setSearchBgColor(color) { sSearchBgColor(color); setToStorage('searchBgColor', color);}
  function setSearchTextColor(color) { sSearchTextColor(color); setToStorage('searchTextColor', color);}
  function setSearchBorderColor(color) { sSearchBorderColor(color); setToStorage('searchBorderColor', color);}
  function setShowDate(b) { sSetShowDate(b); setToStorage('showDate', b);}
  function setShowTime(b) { sSetShowTime(b); setToStorage('showTime', b);}
  function setShowPlaceholder(b) { sSetShowPlaceholder(b); setToStorage('showPlaceholder', b);}
  function setShowIcon(b) { sSetShowIcon(b); setToStorage('showIcon', b);}
  function setFavColor(b) { sFavColor(b); setToStorage('favColor', b);}
  function setFavBgColor(b) { sFavBgColor(b); setToStorage('favBgColor', b);}

  // Theme State

  const [barBgColor, sBarBgColor] = useState('transparent');
  const [textColor, sTextColor] = useState('#fff');
  const [bg, setBg] = useState("https://images.unsplash.com/photo-1497436072909-60f360e1d4b1");
  const [searchBgColor, sSearchBgColor] = useState('#fff');
  const [searchTextColor, sSearchTextColor] = useState('#000');
  const [searchBorderColor, sSearchBorderColor] = useState('#ffffff');
  const [engine, setEngine] = useState(1);
  const [showDate, sSetShowDate] = useState(true);
  const [showTime, sSetShowTime] = useState(true);
  const [showPlaceholder, sSetShowPlaceholder] = useState(true);
  const [showIcon, sSetShowIcon] = useState(true);
  const [favColor, sFavColor] = useState('#ffffff');
  const [favBgColor, sFavBgColor] = useState('#101010');

  // Function State

  const [manage, setManage] = useState(false);
  const [custom, setCustom] = useState(false);
  const [input, setInput] = useState('');
  const [group, setGroup] = useState('');
  const [menu, setMenu] = useState(false);
  const [picker, setPicker] = useState(false);
  const [mode, setMode] = useState(1);
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [links, setlinks] = useState([]);
  const [groups, setGroups] = useState([]);
  const [displayPicker, setDisplayPicker] = useState(0);
  const [over, setOver] = useState(false);

  useEffect(() => {
    const t = getFromStorage('showTime');
    const d = getFromStorage('showDate');
    const p = getFromStorage('showPlaceholder');
    const i = getFromStorage('showIcon');
    t ? (t == 'true' || t == true ? sSetShowTime(true) : sSetShowTime(false)) : sSetShowTime(true); 
    d ? (d == 'true' || d == true ? sSetShowDate(true) : sSetShowDate(false)) : sSetShowDate(true); 
    p ? (p == 'true' || p == true ? sSetShowPlaceholder(true) : sSetShowPlaceholder(false)) : sSetShowPlaceholder(true); 
    i ? (i == 'true' || i == true ? sSetShowIcon(true) : sSetShowIcon(false)) : sSetShowIcon(true); 

    getFromStorage('bg') ? setBg(getFromStorage('bg')) : setBg("https://images.unsplash.com/photo-1497436072909-60f360e1d4b1");

    getFromStorage('favColor') ? sFavColor(getFromStorage('favColor')) : sFavColor('#fff');
    getFromStorage('favBgColor') ? sFavBgColor(getFromStorage('favBgColor')) : sFavBgColor('#101010');
    getFromStorage('barBgColor') ? sBarBgColor(getFromStorage('barBgColor')) : sBarBgColor('transparent');
    getFromStorage('searchBorderColor') ? sSearchBorderColor(getFromStorage('searchBorderColor')) : sTextColor('#fff');
    getFromStorage('searchBgColor') ? sSearchBgColor(getFromStorage('searchBgColor')) : sSearchBgColor('#fff');
    getFromStorage('searchTextColor') ? sSearchTextColor(getFromStorage('searchTextColor')) : sSearchTextColor('#000');
    getFromStorage('links') ? setlinks(JSON.parse(getFromStorage('links'))) : setlinks([]);
    getFromStorage('barBgColor') ? setBarBgColor(getFromStorage('barBgColor')) : setBarBgColor('transparent');
    getFromStorage('engine') ? setEngine(getFromStorage('engine')) : setEngine(1);
    getFromStorage('textColor') ? sTextColor(getFromStorage('textColor')) : sTextColor('#fff');
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
    if (picker) { document.getElementById('personal').style.display = 'block';
    } else { setTimeout(() => { document.getElementById('personal').style.display = 'none' }, 800) };
  }, [picker])

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

  function removePicker() {
    if (displayPicker != 0 && !over) {
      setDisplayPicker(0);
    }
  }

  function addLink() {
    if (group == '') {
      setlinks([...links, {name: name, link: link, group: 'General'}]);
      setToStorage('links', JSON.stringify([...links, {name: name, link: link, group: 'General'}]));
    } else {
      if (links.length == 1 && links[0].length == 0) {
        setlinks([{name: name, link: link, group: group}]);
        setToStorage('links', JSON.stringify([{name: name, link: link, group: group}]));
      } else {
        setlinks([...links, {name: name, link: link, group: group}]);
        setToStorage('links', JSON.stringify([...links, {name: name, link: link, group: group}]));
      }
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

  function toggleFavourite(name) {
    var newLinks = links.map((link) => {
      if (link.name == name) {
        link.favourite = !link.favourite;
      }
      return link;
    })
    setlinks(newLinks);
    setToStorage('links', JSON.stringify(newLinks));
  }

  function renderFavourites() {
    var favs = links.filter((link) => link.favourite == true);
    return favs.map((link) => {
      return (
        <div onClick={() => openURL(link.link)} style={{backgroundColor: favBgColor}} className="bg-black block cursor-pointer hover:font-bold rounded-full text-white hover:scale-105 font-medium text-sm px-5 py-2 md:py-1 w-fit transition-all ease-in" key={link.name}>
          <span style={{color: favColor}} className='max-w-xs truncate'>{link.name}</span>
        </div>
      )
    })
  }

  function renderLinks() {

    if (links.length > 0) {
      links.map((link) => {
        if (link.group != '') {
          if (!groups.includes(link.group)) {
            groups.push(link.group);
          }
        }
      })
      if (groups.length > 0) {
        return groups.map((group, index) => {
          return (
            <div key={index}>
              <div className='text-white font-medium text-sm'>{group}</div>
              <div className='mt-1 space-y-2'>
                {links.map((link, index) => {
                  if (link.group == group) {
                    return (
                      <div key={index} className="bg-black block border-2 cursor-pointer hover:font-bold rounded-full border-neutral-600 text-white hover:border-red-500 font-medium text-sm px-5 w-full transition-all ease-in">
                        <div className='flex items-center space-x-2'>
                          <span onClick={() => openURL(link.link)} className="flex-grow py-1.5">{link.name}</span>
                          <div onClick={() => toggleFavourite(link.name)} className={`hover:text-red-500 transition-all ease-in ${link.favourite ? 'text-orange-500' : ''}`}><FiStar fontSize={18} /></div>
                          <div onClick={() => removeLink(link.name)} className='hover:text-red-500 transition-all ease-in'><FiTrash fontSize={18} /></div>
                        </div>
                      </div>
                    )
                  }
                })}
              </div>
            </div>
          )
        })
      } else {
        return links.map((link, index) => {
          return (
            <div key={index} className="bg-black block border-2 cursor-pointer hover:font-bold rounded-full border-neutral-600 text-white hover:border-red-500 font-medium text-sm px-5 w-full transition-all ease-in">
              <div className='flex items-center'>
                <span onClick={() => openURL(link.link)} className="flex-grow py-1.5">{link.name}</span>
                <div onClick={() => addFavourite(link.name)} className='hover:text-red-500 transition-all ease-in'><FiStar fontSize={18} /></div>
                <div onClick={() => removeLink(link.name)} className='hover:text-red-500 transition-all ease-in'><FiTrash fontSize={18} /></div>
              </div>
            </div>
          )
        })
      }
    } else {
      return (
        <div className='text-white font-medium text-sm'>No links added</div>
      )
    }}


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
      
  function engineWord() {
    if (engine == 1) {
      return 'Google'
    } else if (engine == 2) {
      return 'Bing'
    } else if (engine == 3) {
      return 'DuckDuckGo'
    } else if (engine == 4) {
      return 'Ecosia'
    } else {
      return ''
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
        <link rel='icon' href='/search.png' />
      </Head>

      {/* Navbar */}

      <div className='bg-black w-full flex items-center md:justify-between justify-end px-5 py-2 absolute top-0 z-10' style={{color: textColor, backgroundColor: barBgColor}}>
        <div className='font-bold hidden md:flex gap-3'>
          <span className={showDate ? 'block' : 'hidden'}>{date}</span>
          <span className={showDate && showTime ? 'block' : 'hidden'}>|</span>
          <span className={showTime ? 'block' : 'hidden'}>{time}</span>
        </div>
        <div className='cursor-pointer' onClick={() => setMenu(true)}>
          <FiMenu size={30} />
        </div>
      </div>

      {/* Search Bar */}

      <div className='w-full h-full flex flex-col justify-center items-center'>
        <form className='max-w-lg w-full mx-auto mt-4 relative flex md:px-0 px-5' onSubmit={(e) => {e.preventDefault(), setSearch()}}>
          <div className={`flex absolute inset-y-0 left-0 items-center md:pl-3 pl-8 pointer-events-none ${showIcon ? '' : 'hidden'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style={{color: searchTextColor}} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </div>
          <input placeholder={showPlaceholder ? ('Search ' + engineWord()) : ''} onChange={handleChange} value={input} type='text' style={{backgroundColor: searchBgColor, color: searchTextColor, borderColor: searchBorderColor}} className={`w-full rounded-full p-2.5 ${showIcon ? 'pl-10' : 'pl-4'} border-2 focus:border-gray-700 outline-none transition-all ease-in`} />
        </form>
        <div className='flex flex-wrap pt-3 px-5 max-w-lg w-full mx-auto justify-center items-center gap-2'>
          {renderFavourites()}
        </div>
      </div>

      {/* Menu */}

      <div id="layer" className={`absolute top-0 left-0 right-0 bottom-0 w-full h-screen z-20 hidden ${menu ? "block" : ""}`}>
        <div className='relative w-full h-full'>
          <div className={`bg-black/50 h-full w-full ${menu ? "block animate__animated animate__fadeIn animate__delay-05s" : "animate__animated animate__fadeOut"}`} onClick={() => setMenu(false)}></div>
          <div className={`bg-[#101010] md:w-[400px] w-screen h-full absolute top-0 right-0 ${menu ? "block animate__animated animate__slideInRight animate__delay-05s" : "animate__animated animate__slideOutRight animate__fast"}`}>
            
            {/* Menu Header */}
            
            <div className='w-full flex items-center justify-between px-5 py-2 text-white'>
              <div className='flex justify-center items-center w-full md:w-3/4 text-center'>
                <div className='h-full flex-1 w-full cursor-pointer' onClick={() => setMode(1)}>
                  <span className="h-full">Bookmarks</span>
                  <div className={`h-1 bg-red-500 rounded-full mt-1 w-full ${mode == 1 ? "block animate__animated animate__slideInRight animate__fast" : "animate__animated animate__slideOutRight animate__fast"}`}></div>
                </div>
                <div className='h-full flex-1 w-full cursor-pointer' onClick={() => setMode(2)}>
                  <span className="h-full">Settings</span>
                  <div className={`h-1 bg-red-500 rounded-full mt-1 w-full ${mode == 2 ? "block animate__animated animate__slideInLeft animate__fast" : "animate__animated animate__slideOutLeft animate__fast"}`}></div>
                </div>
              </div>
              <div className='group cursor-pointer' onClick={() => {setMenu(false); setCustom(false)}}>
                <div className='group-hover:rotate-90 transition-all ease-in duration-300'>
                  <FiX size={30} />
                </div>
              </div>
            </div>

            {/* Menu Body */}

            {mode == 1 ? (
              <div className='h-full flex flex-col'>
                <div onClick={() => setManage(n => !n)} className='flex text-white cursor-pointer items-center px-5 gap-3 justify-end py-2 hover:text-red-500 transition-all ease-in'>
                  <div className={`${manage ? 'rotate-180' : 'rotate-0'}`}>
                    <FiChevronUp fontSize={20} />
                  </div>
                  <span className='text-right font-bold'>Add Bookmark</span>
                </div>
                <div id="books" className={`space-y-2 w-full min-h-[250px] pr-2 p-5 pt-0 text-white flex flex-col justify-center items-center overflow-hidden ${manage ? "block animate__animated animate__slideInRight" : "hidden animate__animated animate__slideOutRight"}`}>
                  <div className='w-full'>
                    <p className='text-sm'>Title</p>
                    <input onChange={(e) => setName(e.target.value)} value={name} type='text' className='bg-black text-white w-full rounded-full text-base p-1 px-4 border-2 border-neutral-600 transition ease-in focus:outline-none focus:border-red-500' placeholder='Name' />
                  </div>
                  <div className='w-full'>
                    <p className='text-sm'>Link URL</p>
                    <input onChange={(e) => setLink(e.target.value)} value={link} type='text' className='bg-black text-white w-full rounded-full text-base p-1 px-4 border-2 border-neutral-600 transition ease-in focus:outline-none focus:border-red-500' placeholder='URL' />
                  </div>
                  <div className='w-full'>
                    <p className='text-sm'>Group name</p>
                    <input onChange={(e) => setGroup(e.target.value)} value={group} type='text' className='bg-black text-white w-full rounded-full text-base p-1 px-4 border-2 border-neutral-600 transition ease-in focus:outline-none focus:border-red-500' placeholder='Group Name' />
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
                <div onClick={() => setPicker(true)} className='flex text-white cursor-pointer mt-3 items-center px-5 gap-3 justify-end py-2 hover:text-red-500 transition-all ease-in'>
                  <div className={`${custom ? 'rotate-180' : 'rotate-0'}`}>
                    <FiChevronUp fontSize={20} />
                  </div>
                  <span className='text-right font-bold'>Custom Theming</span>
                </div>
                <div onClick={() => openURL('tanvirbhachu.dev')} className='flex text-white hover:text-violet-600 transition-all ease-in bg-[#212121] cursor-pointer rounded-xl mt-3 items-center px-5 gap-3 justify-center py-2'>
                  <span className='text-center font-bold'>by Tanvir Bhachu</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Personalisation */}

      <div id="personal" className={`absolute top-0 left-0 right-0 bottom-0 w-full h-screen z-40 hidden ${picker ? "block" : ""}`}>
        <div className='relative w-full h-full flex'>
          <div className={`bg-black/50 h-full flex flex-grow ${picker ? "block animate__animated animate__fadeIn animate__delay-05s" : "animate__animated animate__fadeOut"}`} onClick={() => {setPicker(false); setDisplayPicker(0)}}>
            <div className='relative h-3/4 w-3/4 bg-black hidden m-auto lg:flex flex-col border-2 border-white rounded-xl overflow-hidden bg-cover bg-center' style={{backgroundImage: 'url("' + bg + '")'}}>
              {/* Navbar */}

              <div className='bg-black w-full flex items-center md:justify-between justify-end px-5 py-2 absolute left-0 top-0 z-10' style={{color: textColor, backgroundColor: barBgColor}}>
                <div className='font-bold hidden md:flex gap-3'>
                  <span className={showDate ? 'block' : 'hidden'}>{date}</span>
                  <span className={showDate && showTime ? 'block' : 'hidden'}>|</span>
                  <span className={showTime ? 'block' : 'hidden'}>{time}</span>
                </div>
                <div className='cursor-pointer'>
                  <FiMenu size={30} />
                </div>
              </div>

              {/* Search Bar */}

              <div className='w-full h-full flex flex-col justify-center items-center'>
                <div className='max-w-lg w-full mx-auto relative flex md:px-0 px-5'>
                  <div className={`flex absolute inset-y-0 left-0 items-center md:pl-3 pl-8 pointer-events-none ${showIcon ? '' : 'hidden'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style={{color: searchTextColor}} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                  </div>
                  <input placeholder={showPlaceholder ? ('Search ' + engineWord()) : ''} disabled type='text' style={{backgroundColor: searchBgColor, color: searchTextColor, borderColor: searchBorderColor}} 
                  className={`w-full rounded-full p-2.5 ${showIcon ? 'pl-10' : 'pl-4'} border-2 focus:border-gray-700 outline-none transition-all ease-in`} />
                </div>
                <div className='flex space-x-3 pt-3'>
                  {renderFavourites()}
                </div>
              </div>
            </div>
          </div>
          <div onClick={() => removePicker()} className={`bg-[#101010] md:w-[400px] w-screen h-full ${picker ? "block animate__animated animate__slideInRight animate__delay-05s" : "animate__animated animate__slideOutRight animate__fast"}`}>
            
            {/* Menu Header */}
            
            <div className='w-full flex items-center justify-between px-5 py-2 text-white'>
              <div className='h-full flex-1 w-full'>
                <span className="h-full text-xl font-bold">Custom Personalisation</span>
              </div>
              <div className='group cursor-pointer' onClick={() => {setPicker(false); setDisplayPicker(0)}}>
                <div className='group-hover:rotate-90 transition-all ease-in duration-300'>
                  <FiX size={30} />
                </div>
              </div>
            </div>

            <div className='h-full w-full flex flex-col px-5 pb-20 text-white overflow-y-scroll'>
              <div className='flex flex-col space-y-5 px-3 animate__animated animate__slideInRight'>
                <div className='max-w-sm w-full mx-auto flex flex-col space-y-6 mt-5'>
                  <div className='w-full relative'>
                    <div className='flex space-x-4 items-center'>
                      <p className='text-base font-bold cursor-pointer' onClick={() => handleClick(100)}>Change Background Image</p>
                      {displayPicker == 100 ? <FiChevronUp className='text-white' /> : <FiChevronDown className='text-white' />}
                    </div>
                    
                    <div onMouseOver={() => setOver(true)} onMouseLeave={() => setOver(false)} className={`w-full ${displayPicker == 100 ? 'absolute top-9 left-0 block z-50' : 'hidden'}`}>
                      <input onChange={(e) => setBg(e.target.value)} value={bg} type='text' className='bg-black text-white w-full rounded-full text-base p-1 px-4 border-2 border-neutral-600 transition ease-in focus:outline-none focus:border-red-500' placeholder='Name' />
                    </div>
                  </div>
                  <div className='w-full relative select-none'>
                    <div className='flex space-x-4 items-center'>
                      <p className='text-base font-bold'>Bar Background Colour</p>
                      <div className='border-[3px] border-white p-3 w-fit aspect-video rounded-lg' onClick={() => handleClick(1)} style={{backgroundColor: barBgColor}}></div>
                      {barBgColor == 'transparent' ? <FiEyeOff className='text-white' onClick={() => setBarBgColor('#fff')} /> : <FiEye className='text-white' onClick={() => setBarBgColor('transparent')} />}
                    </div>
                    
                    <div onMouseOver={() => setOver(true)} onMouseLeave={() => setOver(false)} className={`${displayPicker == 1 ? 'absolute top-9 left-0 block z-50' : 'hidden'}`}>
                      <ChromePicker
                        color={ barBgColor }
                        onChange={ (color) => {setBarBgColor(rgbaToHex(color.rgb.r, color.rgb.g, color.rgb.b, color.rgb.a)); console.log(color)} }
                      />
                    </div>
                  </div>
                  <div className='w-full relative select-none'>
                    <div className='flex space-x-4 items-center'>
                      <p className='text-base font-bold'>Bar Text Colour</p>
                      <div className='border-[3px] border-white p-3 w-fit aspect-video rounded-lg' onClick={() => handleClick(2)} style={{backgroundColor: textColor}}></div>
                      {textColor == 'transparent' ? <FiEyeOff className='text-white' onClick={() => setTextColor('#fff')} /> : <FiEye className='text-white' onClick={() => setTextColor('transparent')} />}
                    </div>
                    
                    <div onMouseOver={() => setOver(true)} onMouseLeave={() => setOver(false)}  className={`${displayPicker == 2 ? 'absolute top-9 left-0 block z-50' : 'hidden'}`}>
                      <ChromePicker
                        color={ textColor }
                        onChange={ (color) => {setTextColor(rgbaToHex(color.rgb.r, color.rgb.g, color.rgb.b, color.rgb.a)); console.log(color)} }
                      />
                    </div>
                  </div>
                  <div className='w-full relative select-none'>
                    <div className='flex space-x-4 items-center'>
                      <p className='text-base font-bold'>Search Background Colour</p>
                      <div className='border-[3px] border-white p-3 w-fit aspect-video rounded-lg' onClick={() => handleClick(3)} style={{backgroundColor: searchBgColor}}></div>
                      {searchBgColor == 'transparent' ? <FiEyeOff className='text-white' onClick={() => setSearchBgColor('#fff')} /> : <FiEye className='text-white' onClick={() => setSearchBgColor('transparent')} />}
                    </div>
                    
                    <div onMouseOver={() => setOver(true)} onMouseLeave={() => setOver(false)} className={`${displayPicker == 3 ? 'absolute top-9 left-0 block z-50' : 'hidden'}`}>
                      <ChromePicker
                        color={ searchBgColor }
                        onChange={ (color) => {setSearchBgColor(rgbaToHex(color.rgb.r, color.rgb.g, color.rgb.b, color.rgb.a)); console.log(color)} }
                      />
                    </div>
                  </div>
                  <div className='w-full relative select-none'>
                    <div className='flex space-x-4 items-center'>
                      <p className='text-base font-bold'>Search Text Colour</p>
                      <div className='border-[3px] border-white p-3 w-fit aspect-video rounded-lg' onClick={() => handleClick(4)} style={{backgroundColor: searchTextColor}}></div>
                      {searchTextColor == 'transparent' ? <FiEyeOff className='text-white' onClick={() => setSearchTextColor('#fff')} /> : <FiEye className='text-white' onClick={() => setSearchTextColor('transparent')} />}
                    </div>
                    
                    <div onMouseOver={() => setOver(true)} onMouseLeave={() => setOver(false)} className={`${displayPicker == 4 ? 'absolute top-9 left-0 block z-50' : 'hidden'}`}>
                      <ChromePicker
                        color={ searchTextColor }
                        onChange={ (color) => {setSearchTextColor(rgbaToHex(color.rgb.r, color.rgb.g, color.rgb.b, color.rgb.a)); console.log(color)} }
                      />
                    </div>
                  </div>
                  <div className='w-full relative select-none'>
                    <div className='flex space-x-4 items-center'>
                      <p className='text-base font-bold'>Search Border Colour</p>
                      <div className='border-[3px] border-white p-3 w-fit aspect-video rounded-lg' onClick={() => handleClick(5)} style={{backgroundColor: searchBorderColor}}></div>
                      {searchBorderColor == 'transparent' ? <FiEyeOff className='text-white' onClick={() => setSearchBorderColor('#fff')} /> : <FiEye className='text-white' onClick={() => setSearchBorderColor('transparent')} />}
                    </div>
                    
                    <div onMouseOver={() => setOver(true)} onMouseLeave={() => setOver(false)} className={`${displayPicker == 5 ? 'absolute top-9 left-0 block z-50' : 'hidden'}`}>
                      <ChromePicker
                        color={ searchBorderColor }
                        onChange={ (color) => {setSearchBorderColor(rgbaToHex(color.rgb.r, color.rgb.g, color.rgb.b, color.rgb.a)); console.log(color)} }
                      />
                    </div>
                  </div>
                  <div className='w-full relative select-none'>
                    <div className='flex space-x-4 items-center'>
                      <p className='text-base font-bold'>Favourites Text Colour</p>
                      <div className='border-[3px] border-white p-3 w-fit aspect-video rounded-lg' onClick={() => handleClick(6)} style={{backgroundColor: favColor}}></div>
                      {favColor == 'transparent' ? <FiEyeOff className='text-white' onClick={() => setFavColor('#fff')} /> : <FiEye className='text-white' onClick={() => setFavColor('transparent')} />}
                    </div>
                    
                    <div onMouseOver={() => setOver(true)} onMouseLeave={() => setOver(false)} className={`${displayPicker == 6 ? 'absolute top-9 left-0 block z-50' : 'hidden'}`}>
                      <ChromePicker
                        color={ favColor }
                        onChange={ (color) => {setFavColor(rgbaToHex(color.rgb.r, color.rgb.g, color.rgb.b, color.rgb.a));} }
                      />
                    </div>
                  </div>
                  <div className='w-full relative select-none'>
                    <div className='flex space-x-4 items-center'>
                      <p className='text-base font-bold'>Favourites Background Colour</p>
                      <div className='border-[3px] border-white p-3 w-fit aspect-video rounded-lg' onClick={() => handleClick(7)} style={{backgroundColor: favBgColor}}></div>
                      {favBgColor == 'transparent' ? <FiEyeOff className='text-white' onClick={() => setFavBgColor('#fff')} /> : <FiEye className='text-white' onClick={() => setFavBgColor('transparent')} />}
                    </div>
                    
                    <div onMouseOver={() => setOver(true)} onMouseLeave={() => setOver(false)} className={`${displayPicker == 7 ? 'absolute top-9 left-0 block z-50' : 'hidden'}`}>
                      <ChromePicker
                        color={ favBgColor }
                        onChange={ (color) => {setFavBgColor(rgbaToHex(color.rgb.r, color.rgb.g, color.rgb.b, color.rgb.a)); console.log(color)} }
                      />
                    </div>
                  </div>
                  <div className='w-full relative select-none'>
                    <div className='flex space-x-4 items-center'>
                      <p className='text-base font-bold cursor-pointer'>Hide Date</p>
                      {showDate ? <FiXSquare className='text-white' onClick={() => setShowDate(false)} /> : <FiCheckSquare className='text-white' onClick={() => setShowDate(true)} />}
                    </div>
                  </div>
                  <div className='w-full relative select-none'>
                    <div className='flex space-x-4 items-center'>
                      <p className='text-base font-bold cursor-pointer'>Hide Time</p>
                      {showTime ? <FiXSquare className='text-white' onClick={() => setShowTime(false)} /> : <FiCheckSquare className='text-white' onClick={() => setShowTime(true)} />}
                    </div>
                  </div>
                  <div className='w-full relative select-none'>
                    <div className='flex space-x-4 items-center'>
                      <p className='text-base font-bold cursor-pointer'>Hide Search placeholder</p>
                      {showPlaceholder ? <FiXSquare className='text-white' onClick={() => setShowPlaceholder(false)} /> : <FiCheckSquare className='text-white' onClick={() => setShowPlaceholder(true)} />}
                    </div>
                  </div>
                  <div className='w-full relative select-none'>
                    <div className='flex space-x-4 items-center'>
                      <p className='text-base font-bold cursor-pointer'>Hide Search Icon</p>
                      {showIcon ? <FiXSquare className='text-white' onClick={() => setShowIcon(false)} /> : <FiCheckSquare className='text-white' onClick={() => setShowIcon(true)} />}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>  
  )
}
