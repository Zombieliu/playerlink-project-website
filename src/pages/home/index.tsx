import { Fragment,useRef,useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    AnnotationIcon,
    ChatAlt2Icon,
    InboxIcon,
    MenuIcon,
    QuestionMarkCircleIcon,
    XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'


const navigation = [
    { name: 'Home', href: '#' },
    { name: 'Team', href: '#' },
    { name: 'Token', href: '#' },
    { name: 'Docs', href: '#' },
]
const twotext=[
    {

        img:"https://web3games.org/_next/image?url=%2Fobjects%2Fsquare.png&w=256&q=75",
        h1:"#Protocol",
        h2:"API-as-a-service Protocol for chain integration "

    },
    {
        img:"https://web3games.org/_next/image?url=%2Fobjects%2Fcircle.png&w=256&q=75",
        h1:"#Portal",
        h2:"One-stop blockchain gaming Portal",
    },
    {
        img:"https://web3games.org/_next/image?url=%2Fobjects%2Ftriangle.png&w=256&q=75",
        h1:"#Studios",
        h2:"Studios for fostering up-and-coming games and digital content",
    },
    {
        img:"https://web3games.org/_next/image?url=%2Fobjects%2Fcross.png&w=256&q=75",
        h1:"#Chain ",
        h2:"Substrate-based Blockchain  for next generation gameplay",
    },
]
const toend=[
    {
        title:"Explore",
        h1:"Home",
        h1url:"#",
        h2:"Token",
        h2url:"#",

    },
    {
        title:"Resources",
        h1:"Playerlink",
        h1url:"https://www.playerlink.io/",
        h2:"Matters",
        h2url:"",
        h3:"Maskbook",
        h3url:""
    },{
        title:"Participate",
        h1:"Discord",
        h1url:"https://discord.gg/gJuDTcdUjj",
        h2:"Twitter",
        h2url:"#",
        h3:"Instagram",
        h3url:"#",
        h4:'Medium',
        h4url:""
    },
]
const Portaltext=[
    {
        text:"fa fa-user p-3.5",
        title:"Player Decentralized Identifier (DID)",
        h1:"Create verifiable and globally unique digital identities"
    },
    {
        text:"fa fa-gamepad p-3  ",
        title:"Initial Game Offerings (IGO)",
        h1:"Launch initial sales for gaming tokens"
    },
    {
        text:"fa fa-th-large p-3",
        title:"Initial NFT Offerings (INO)",
        h1:"Launch initial sales for genesis game NFTs"
    },
    {
        text:"fa fa-refresh p-3",
        title:"Game Token Swap",
        h1:"Support in-game token exchanges between multiple metaverses"
    },
    {
        text:"fa fa-tag p-3",
        title:"NFT Marketplace",
        h1:"Connect artists, creators, and crypto enthusiasts using digital ownership"
    },
    {
        text:"fa fa-archive p-3",
        title:"NFT Lending",
        h1:"Enables play-to-earn gaming guild lending operation and opens the NFT lending market"
    },


]
const Studiosimg=[
    {
        ID:"1",
        img:"https://web3games.org/_next/image?url=%2Fgame-logo%2F1.png&w=256&q=75"
    },
    {
        ID:"2",
        img:"https://web3games.org/_next/image?url=%2Fgame-logo%2F2.png&w=256&q=75"
    },
    {
        ID:"3",
        img:"https://web3games.org/_next/image?url=%2Fgame-logo%2F3.png&w=256&q=75"
    },
    {
        ID:"4",
        img:"https://web3games.org/_next/image?url=%2Fgame-logo%2F4.png&w=256&q=75"
    },
    {
        ID:"5",
        img:"https://web3games.org/_next/image?url=%2Fgame-logo%2F5.png&w=256&q=75"
    },
    {
        ID:"6",
        img:"https://web3games.org/_next/image?url=%2Fgame-logo%2F6.png&w=256&q=75"
    },

]
const Mediatext=[
    {
        id:"1",
        href:"#",
        img:"https://web3games.org/_next/image?url=%2Fmedia%2Fcoindesk.png&w=1920&q=75",
        h1:'CoinDesk',
        h2:"NEAR Protocol is working with Web3Games and Chinese artist Heshan Huang to sell NFT-based “real estate.”",
    },
    {
        id:"2",
        href:"#",
        img:"https://web3games.org/_next/image?url=%2Fmedia%2Fcointelegraph.png&w=2048&q=75",
        h1:'Cointelegraph',
        h2:"Chinese artist showcases NFT real estate at Alibaba-sponsored innovation festival",
    },
    {
        id:"3",
        href:"#",
        img:"https://web3games.org/_next/image?url=%2Fmedia%2Fyahoo-finance.png&w=1920&q=75",
        h1:'Yahoo! Finance',
        h2:"Alibaba’s E-Commerce Website Taobao to Include NFT Arts in Its Market Festival",
    },
    {
        id:"4",
        href:"#",
        img:"https://web3games.org/_next/image?url=%2Fmedia%2Fdecrypt.png&w=1920&q=75",
        h1:'Decrypt',
        h2:"Alibaba Brings NFT Real Estate to Chinese Entrepreneur Festival",
    },
    {
        id:"5",
        href:"#",
        img:"https://web3games.org/_next/image?url=%2Fmedia%2Fnasdaq.png&w=1920&q=75",
        h1:'Nasdaq',
        h2:"NEAR Protocol is working with blockchain gaming firm Web3Games to sell non-fungible token",
    },
    {
        id:"6",
        href:"#",
        img:"https://web3games.org/_next/image?url=%2Fmedia%2Fcoinmarketcap.png&w=1920&q=75",
        h1:'CoinMarketCap',
        h2:"Alibaba's SCMP follows TIME Magazine, Launches ARTIFACTs NFTs to Tokenize Media Assets",
    },
]
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Home() {

    const [bgstudios,Setbgstudios] =useState("https://web3games.org/_next/image?url=%2Fstudios%2Fconstellation-bg.jpg&w=1920&q=75")
    const bgCryptoEmpire=()=>{
      Setbgstudios("https://cdn.discordapp.com/attachments/897398778166906911/900033418979594280/1.jpg")


    }
    const bgConstellation=()=>{
        Setbgstudios("https://web3games.org/_next/image?url=%2Fstudios%2Fconstellation-bg.jpg&w=1920&q=75")

    }


    // @ts-ignore
    // @ts-ignore
    return (
        <div className="min-h-screen ">
            <header>
                <Popover className="relative ">
                    <div className="flex  fixed z-40 inset-x-0 bg-black  bg-opacity-75 justify-between items-center p-3 md:p-3 sm:px-6 md:justify-start md:space-x-10 lg:px-32 ">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <a href="home">
                                <span className="sr-only">Workflow</span>
                                <img
                                    className=" w-auto h-8"
                                    src="https://cdn.discordapp.com/attachments/897398778166906911/918367143777673216/viewfile.png"
                                    alt=""
                                />
                            </a>
                        </div>
                        <div className="flex -mr-2 -my-2 md:hidden">
                            <Popover.Button className="bg-white rounded-md p-2  inline-flex items-center  justify-center text-black text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span className="sr-only">Open menu</span>
                                <MenuIcon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>

                        </div>
                        <Popover.Group as="nav" className="hidden md:flex space-x-10  ">
                            {navigation.map((item) => (
                                <a key={item.name} href={item.href} className="text-xl rounded-lg p-2 font-medium text-gray-50 active:bg-red-50 hover:bg-blue-500">
                                    {item.name}
                                </a>
                            ))}
                        </Popover.Group>
                        <div className="hidden md:flex text-gray-50 items-center justify-end md:flex-1 lg:w-0 text-2xl ">
                            <a  className="mr-5" href=""><i className="fa fa-twitter" aria-hidden="true"></i></a>
                            <a className="mr-5" href=""><i className="fa fa-telegram" aria-hidden="true"></i></a>
                            <a className="mr-5" href=""><i className="fa fa-envelope-o" aria-hidden="true"></i></a>

                        </div>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Popover.Panel
                            focus
                            className="absolute z-50 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                        >
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                                <div className="pt-5 pb-6 px-5 ">
                                    <div className="flex items-center justify-between ">
                                        <div>
                                            <a href="home">
                                                <img
                                                    className="h-8 w-auto"
                                                    src="https://cdn.discordapp.com/attachments/897398778166906911/918367494304038982/viewfile.png"
                                                    alt="Workflow"
                                                /></a>
                                        </div>
                                        <div className="-mr-2">
                                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                <span className="sr-only">Close menu</span>
                                                <XIcon className="h-6 w-6" aria-hidden="true" />
                                            </Popover.Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-6 px-5 ">
                                    {navigation.map((item) => (
                                        <div   key={item.name} className="m-3   text-center ">
                                            <a
                                                href={item.href}
                                                className="p-0.5  text-2xl rounded-lg bg-indigo-300 font-medium text-gray-50  "
                                            >
                                                {item.name}
                                            </a>  </div>
                                    ))}

                                    <div className="mt-6">
                                        <p className="mt-6 text-center text-xl font-medium text-gray-500">
                                            <a  className="m-5" href=""><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                            <a className="m-5" href=""><i className="fa fa-telegram" aria-hidden="true"></i></a>
                                            <a className="m-5" href=""><i className="fa fa-envelope-o" aria-hidden="true"></i></a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </Popover>
            </header>

            <main>
                <div>
                    {/* Hero card */}

                    <div className="relative"  >


                        <div className="relative  bg-cover  md:bg-center sm:overflow-hidden">
                            <div className=" absolute inset-0 ">
                                <img
                                    className="h-full w-full object-cover"
                                    src="https://img.tukuppt.com/bg_grid/00/03/39/trTD0kQKQJ.jpg!/fh/350" alt=""/>
                            </div>

                            <div className="relative px-2 py-32 md:py-48 md:px-32 xl:px-72 md:p-72  ">
                                <div className="px-5 mt-10">
                                    <div className="text-center   block text-gray-700 font-extrabold tracking-tight ">
                                        <div className="mb-3 text-4xl md:text-3xl  xl:text-7xl md:font-extrabold">
                                            Transforming a new generation of gameplay and digital content</div>
                                        <div className="text-xl text-gray-100 mt-5">
                                            An Integrated Platform for ALL THINGS BLOCKCHAIN Gaming.
                                        </div>
                                    </div>
                                    <div className="mt-16 md:flex justify-center text-center text-base font-medium text-gray-500">

                                        <p className="mt-5 text-center text-base font-medium text-gray-500 md:mr-5">
                                            <a href=""
                                               className="text-lg whitespace-nowrap inline-flex items-center  justify-center px-8 py-3 border-2 border-yellow-400 rounded-full shadow-sm text-base font-medium text-white bg-black transform duration-500 hover:shadow-2xl hover:-translate-y-1"
                                            >
                                                Portal Comming Soon
                                            </a>
                                        </p>
                                        <p className="mt-5 text-center  text-base font-medium text-gray-500">
                                            <a href=""
                                               className="text-lg  whitespace-nowrap inline-flex items-center   justify-center px-12 py-3 border-2 border-yellow-400 rounded-full shadow-sm text-base font-medium text-black bg-white transform duration-500 hover:shadow-2xl hover:-translate-y-1"
                                            >
                                                Read Docs
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative   xl:mx-44   z-10 -mb-80 -ml-8 md:ml-32 md:-mb-80 xl:ml-40 xl:-mb-96  ">
                                <img className="w-auto h-24 xl:h-48"
                                     src="https://web3games.org/_next/image?url=%2Fobjects%2F3D-03.png&w=256&q=75" alt=""/>
                            </div>

                            <div className="relative text-center bg-gray-600 md:mx-48 xl:mx-72 p-10 mx-4 rounded-lg mb-36 my-72">

                                <div className=" text-blue-600 text-3xl  ">
                                    Our Vision
                                </div>
                                <div  className="flex justify-center justify-end my-3">
                                        <img
                                            className="w-auto h-12  " src="https://cdn.discordapp.com/attachments/897398778166906911/918369386992128010/viewfile.png" alt=""/>

                                </div>
                                <div className="text-white  md:text-xl xl:text-3xl mb-5 font-black">
                                    From conceptualization, creation, to community. Our ecosystem is one where players, developers, creators and investors alike can come together and partake.
                                </div>
                                <div className="text-gray-100 xl:text-2xl font-light">
                                    We are building a community-driven ecosystem for playing, creating, and all things blockchain games in one unique gaming platform.
                                </div>
                            </div>
                            <div className="relative flex justify-end xl:mx-44 xl:p-2 z-10 -mt-48  md:mr-36 md:-mt-48 xl:mr-48 xl:-mt-64  overflow-hidden">
                                <img className=" w-auto h-24 xl:h-48 mb-32"
                                    src="https://web3games.org/_next/image?url=%2Fobjects%2F3D-06.png&w=128&q=75" alt=""/>
                            </div>

                        </div>

                    {/* Logo cloud */}
                {/*        TWO*/}
                        <div className="shadow-xl  bg-white sm:overflow-hidden" >
                            <div className=" px-8 py-16 text-black md:p-16">
                                <div className="md:pl-6 md:pr-6">
                                    <h1 className="text-center text-2xl  tracking-tight sm:text-3xl mb-10 md:pl-32 md:pr-32 ">
                                        <span className="block font-extrabold text-4xl mb-5 md:mb-10">W3G = Gaming (NFT + DEFI)</span>
                                        <span className="block text-base md:text-lg text-gray-500">
                                           The #Web3Games ecosystem is thriving. Be a part of this imminent gaming revolution.
                                        </span>
                                    </h1>
                                    <div className=" flex flex-wrap  justify-center md:justify-between pt-5 " >
                                        {twotext.map((item)=>(
                                            <a key={item.h1} href={item.h1}  >
                                            <div  className="relative bg-black rounded-lg w-80 h-72 md:w-72  mb-14 transform duration-700 hover:shadow-2xl hover:-translate-y-3  ">

                                                <div>
                                                    <h1 className="h-32 px-5 pt-5 text-white font-extrabold text-lg">{item.h2}</h1>
                                                    <h2><img className="px-2 pt-2 w-auto h-36" src={item.img} alt=""/></h2>
                                                </div>
                                            </div >
                                            </a>))}
                                    </div>
                                </div>
                            </div>
                        </div>
                {/*        Protocol*/}
                        <div id="Protocol" className="transition delay-300 duration-300">
                            <div className="bg-black">
                                <div className="py-20 text-center text-xl text-white px-6 md:px-12 xl:px-96">
                                    <h1 className="text-blue-300 xl:text-2xl">Web3Games Protocol</h1>
                                    <h2 className="text-2xl md:text-3xl xl:text-4xl py-5 font-extrabold">Transforming and decentralizing traditional games</h2>
                                    <h3 className="text-base md:text-xl  text-gray-200 font-extralight">An API-as-a-service protocol for gaming companies to integrate with blockchain. Game developers can seamlessly access and distribute blockchain access such as NFTs and gaming tokens.</h3>
                                </div>
                                <div>
                                    <img className="px-4 xl:px-40 pb-20"
                                        src="https://web3games.org/_next/image?url=%2Fgraph%2Fprotocol.png&w=1920&q=75" alt=""/>
                                </div>
                                <div className="flex flex-wrap justify-between px-4 md:px-10 2xl:px-20 pb-32">
                                    <div className="flex bg-indigo-900 rounded-lg  overflow-hidden my-5 2xl:mr-3">
                                        <div className="text-white w-96 md:w-72 lg:w-96 p-10 mx-5">
                                            <div className="w-16 h-16 bg-gray-900 rounded-lg flex justify-center pt-4 font-extrabold text-2xl mb-5">1</div>
                                            <div className="text-xl font-extrabold mb-5">
                                                Player ID
                                            </div>
                                            <div className="text-gray-50 font-medium ">
                                                With Player ID, users can connect all the wallet in the Web3Games portal and just login with email + password or ID private keys in any mobile devices or VR devices.
                                            </div>
                                            
                                        </div>
                                        <div className="hidden 2xl:flex">
                                            <img className="h-96" src="https://web3games.org/_next/image?url=%2Fprotocol%2Fchart-01.png&w=1920&q=75" alt=""/>
                                        </div>


                                    </div>
                                    <div className="flex bg-indigo-900  rounded-lg overflow-hidden my-5">
                                        <div className="text-white w-96 md:w-72 lg:w-96 p-10 mx-5">
                                            <div className="w-16 h-16 bg-gray-900 rounded-lg flex justify-center pt-4 font-extrabold text-2xl mb-5">2</div>
                                            <div className="text-xl font-extrabold mb-5">
                                                Token Distributor
                                            </div>
                                            <div className="text-gray-50 font-medium ">
                                                We provide the token distributor API so game companies can directly distribute the reward tokens without integrating with blockchain APIs, hosting blockchain nodes or working with custodies.</div>

                                        </div>
                                        <div className="hidden 2xl:flex">
                                            <img className="h-96" src="https://web3games.org/_next/image?url=%2Fprotocol%2Fchart-01.png&w=1920&q=75" alt=""/>
                                        </div>


                                    </div>

                                </div>

                            </div>

                        </div>
                {/*        Portal*/}
                        <div id="Portal">
                            <div className="bg-gradient-to-r  from-indigo-400 to-gray-900 flex px-3 py-16 md:px-24 md:py-32 flex-wrap xl:flex-nowrap">
                                <div className="mr-5 md:w-8/12">
                                    <h1 className="text-blue-400 text-lg md:text-xl">Web3Games Portal</h1>
                                <h2 className="text-white text-2xl md:text-4xl my-3">Unlocking your digital world</h2>
                                    <h3 className="text-gray-200 text-base md:text-lg">A versatile blockchain gaming portal with multi-chain launchpad (Ethereum, NEAR, Solana) and interactive facilities designed fr the gaming market.</h3>

                                    <div className="grid  md:grid-cols-2">
                                    {Portaltext.map((item)=>(
                                    <div  key={item.h1} className="mt-12 md:flex w-72 ">
                                    <div className=" bg-gray-900 h-12 w-12 text-center text-2xl text-white rounded-lg md:mr-5">
                                    <i className={item.text} aria-hidden="true"></i></div>
                                    <div className="mt-3 md:mt-0">
                                        <h1 className="text-white text-lg mb-3 font-extrabold">{item.title}</h1>
                                        <h2 className="text-gray-300">{item.h1}</h2>
                                    </div>
                                </div>
                                    ))}
                                </div>
                                </div>


                                <div className="mt-8 xl:mt-0">
                                    <div className=" bg-gradient-to-r  from-yellow-400 via-red-500 to-pink-500 rounded-lg">
                                    <img className=" rounded-lg  transform xl:translate-x-10 xl:translate-y-10" src="https://web3games.org/_next/image?url=%2Fgraph%2Fportal.png&w=828&q=75" alt=""/>
                                        </div>

                                </div>
                            </div>
                        </div>
                {/*        Studios*/}
                        <div id="Studios">
                            <div className="relative px-3 py-16 md:px-24 md:py-32 bg-yellow-300">
                                    <div  className="absolute inset-0 " >

                                        <img
                                            className="h-full w-full w-auto h-auto object-cover transition duration-500 transform"
                                            src={bgstudios}
                                            alt="People working on laptops"
                                        />
                                    </div>
                                <div className="relative">
                                <div className="text-blue-400 text-lg md:text-xl">Web3Games Studios</div>
                                    <div className="flex flex-wrap xl:flex-nowrap ">
                                        <div className="xl:w-6/12 xl:mr-5 mb-10">
                                            <h1 className="text-white text-2xl md:text-4xl my-3 font-extrabold">Building with insightful and experienced developers</h1>
                                            <h2 className="text-white text-base "
                                            >A hub for fostering up-and-coming blockchain games and digital culture. Current portfolio includes game dev teams with extensive background in producing virtual games Call of Duty and Diablo, amongst others, who are now building play-to-earn blockchain games.</h2>
                                        </div>
                                        <div className="rounded-lg flex grid grid-cols-2 md:grid-cols-3">

                                            {Studiosimg.map((item)=>(
                                            <div key={item.ID} className="m-1 ">
                                                <img className="rounded-lg bg-gray-700 hover:bg-gray-900 transition duration-500  transform hover:shadow-2xl hover:-translate-y-2 " src={item.img} alt=""/>
                                            </div>
                                            ))}
                                        </div>
                                    </div>
                                <div className=" lg:flex mt-16 ">
                                    <div  onMouseOver={bgCryptoEmpire}  className="rounded-lg  lg:w-6/12 bg-gray-600  transition duration-500 transform hover:shadow-2xl hover:-translate-y-4 lg:mr-8 mb-10 lg:mb-0    ">
                                        <img className="w-full rounded-t-lg" src="https://web3games.org/_next/image?url=%2Fstudios%2Fcrypto-empire.jpg&w=750&q=75" alt=""/>
                                        <div className="p-5">
                                            <h1 className="text-white text-xl font-extrabold">Crypto Empire</h1>
                                            <h2 className="text-gray-400 font-normal my-3">CryptoEmpire is a NFT trading card game based on real-time cryptocurrency markets. Players battle each other with four-card decks, where each NFT card is tied to its real-time token price. The strength of card combinations are calculated based on prices of the blockchain token at time of battle, and the player with a higher ‘attack value’ wins the match.</h2>
                                            <a href="" >
                                            <h3 className="text-white font-extrabold hover:underline">READ MORE
                                                <i className="fa fa-arrow-right ml-3" aria-hidden="true"></i></h3>
                                            </a>
                                        </div>
                                    </div>
                                    <div onMouseOver={bgConstellation}  className="rounded-lg bg-gray-600 lg:w-6/12 transition duration-500 transform hover:shadow-2xl hover:-translate-y-4 ">
                                        <img className="w-full rounded-t-lg" src="https://web3games.org/_next/image?url=%2Fstudios%2Fconstellation.jpg&w=750&q=75" alt=""/>
                                        <div className="p-5">
                                            <h1 className="text-white text-xl font-extrabold">Constellation</h1>
                                            <h2 className="text-gray-400 font-normal my-3">Empowered by secondary markets outside of the game, Constellation facilitates the unconventional crossing over of NFTs from different chains in one space. Astronauts (players) curate their own spacecraft using digital assets and collectibles, and can visit neighboring stars in the galaxy to explore other spacecraft.</h2>
                                                <h3 className="text-white text-sm font-extrabold bg-gray-400 w-36 text-center p-1 rounded-lg">COMMING SOON
                                                    </h3>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>

                        </div>
                {/*       Chain */}
                        <div id="Chain">
                            <div className="bg-gradient-to-r  from-indigo-400 to-gray-900 px-3 py-16 md:px-24 md:py-32">
                                <div className="text-center px-3 xl:px-80">
                                    <h1 className="text-blue-400 text-sm md:text-lg  font-extrabold">Web3Games Chain</h1>
                                    <h2 className="text-white text-2xl md:text-4xl  my-4 font-extrabold">Enabling incentivized playing and true player ownership</h2>
                                    <h3 className="text-gray-100 text-sm md:text-lg">A Substrate-based solution for faster, secure blockchain gaming with lower transaction costs.</h3>
                                    <p className="mt-10 text-center text-base font-medium text-gray-500 md:mr-5">
                                        <a href=""
                                           className="text-lg whitespace-nowrap border-4 border-yellow-400 inline-flex items-center  justify-center px-8 py-3 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-black transform duration-500 hover:shadow-2xl hover:-translate-y-1"
                                        >
                                            Web3Games Testnet
                                        </a>
                                    </p>
                                </div>
                                <div className="flex flex-wrap xl:flex-nowrap">
                                    <div className=" ">
                                    <div  className="mt-12 md:flex xl:w-5/12 ">
                                        <div className=" bg-gray-900 h-12 w-12 text-center text-2xl text-white rounded-lg md:mr-5">
                                            <i className="fa fa-link p-3" aria-hidden="true"></i></div>
                                        <div className="mt-3 md:mt-0">
                                            <h1 className="text-white  text-lg mb-3 font-extrabold">Substrate-based blockchain</h1>
                                            <h2 className="text-gray-300 text-sm font-semibold">Web3Games Chain is based on Substrate framework and we developed a lot gaming related frames (pallets) to optimise for supporting the blockchain gaming experience. It includes player DID, gaming token swap, NFT swap and lending.</h2>
                                        </div>
                                    </div>
                                    <div  className="mt-12 md:flex xl:w-5/12 ">
                                        <div className=" bg-gray-900 h-12 w-12 text-center text-2xl text-white rounded-lg md:mr-5">
                                            <i className="fa fa-code p-3" aria-hidden="true"></i></div>
                                        <div className="mt-3 md:mt-0">
                                            <h1 className="text-white text-lg mb-3 font-extrabold">EVM compatibility</h1>
                                            <h2 className="text-gray-300 text-sm font-semibold">Web3Games Chain includes an Ethereum Virtual Machine (EVM)-compatible which existing solidity developers can build or migrate the current codes into Web3Games Chain seamlessly. </h2></div>
                                    </div>
                                    </div>

                                        <div className="xl:-ml-96 mt-10 bg-gradient-to-r  from-yellow-400 via-red-500 to-pink-500 rounded-lg">
                                        <img  className="rounded-lg  transform xl:translate-x-10 xl:translate-y-10 max-w-max mx-auto w-full  "
                                              src="https://web3games.org/_next/image?url=%2Fgraph%2Ftestnet.png&w=828&q=75" alt=""/>
                                    </div>


                                </div>
                            </div>

                        </div>
                {/*        ROAD MAP*/}
                        <div className="bg-gray-800 px-3 py-16 md:px-24 md:py-32">
                            <div className="text-center mb-10">
                                <h1 className="text-blue-400 text-lg mb-5">Roadmap</h1>
                                <h2 className="text-white text-4xl font-extrabold">Go-to-market</h2>
                            </div>
                            <div className="xl:px-80 flex justify-center">
                                <div className="bg-gray-700 mr-4 rounded-lg p-1 w-1 ">



                                </div>
                                <div>
                                <div className="text-white font-medium text-lg bg-gray-700 rounded-lg mb-8">
                                    <div className="p-5 md:pr-48 xl:pr-96">
                                        <div className="w-4 h-4 -ml-12  bg-green-500 rounded-full">
                                        </div>
                                    <h1 >Q4 2021</h1>
                                    <h2 className="my-3">W3G Fund Raising</h2>
                                    <h3>W3G Token Public sale</h3>
                                    <h4 className="my-3">Portal (beta) goes live</h4>
                                    <h5 className="text-xs flex font-normal text-gray-300"><i className="fa fa-circle mt-1 ml-3 mr-1" aria-hidden="true"></i>
                                        <div className="text-base font-normal">IGO Feature </div></h5>

                                    <h5 className="text-xs flex font-normal text-gray-300"><i className="fa fa-circle mt-1 ml-3 mr-1" aria-hidden="true"></i>
                                        <div className="text-base ">Player DID </div></h5>
                                    </div>
                                </div>
                                <div className="text-white font-medium text-lg bg-gray-700 rounded-lg">
                                    <div className="p-5">
                                        <div className="w-4 h-4 -ml-12  bg-red-600 rounded-full">

                                        </div>
                                        <h1 >Q1 2022</h1>
                                        <h2 className="my-3">Portal release new feature</h2>
                                        <h5 className="text-xs flex font-normal text-gray-300"><i className="fa fa-circle mt-1 ml-3 mr-1" aria-hidden="true"></i>
                                            <div className="text-base font-normal">Game Token Swap </div></h5>

                                        <h5 className="text-xs flex font-normal text-gray-300 mb-3"><i className="fa fa-circle mt-1 ml-3 mr-1" aria-hidden="true"></i>
                                            <div className="text-base ">NFT Marketplace</div></h5>
                                        <h3>Protocol SDK (beta) goes live</h3>
                                        <h4 className="my-3">Chain stage 1 ready</h4>

                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                {/*        Media*/}
                        <div className="bg-gray-900 px-3 py-16 md:px-24 md:py-32">
                            <div>
                                <h1 className="text-blue-400  text-base md:text-lg mb-3">Media</h1>
                                <h2 className="text-white text-2xl md:text-4xl font-medium">Web3Game in the Media</h2>
                            </div>
                            <div className="mt-5 flex grid md:grid-cols-2 xl:grid-cols-3 ">
                                {Mediatext.map((item)=>(
                                    <a key={item.id} className="transform hover:scale-105 duration-300" href={item.href}>
                                <div  className="mx-2 my-4">
                                <img className="rounded-lg   "
                                    src={item.img} alt=""/>
                                <div className="mt-4">
                                    <h1 className="text-white text-lg font-semibold mb-2">{item.h1}</h1>
                                <h2 className="text-gray-400">{item.h2}</h2>
                                </div>
                                </div></a>
                                ))}

                            </div>
                        </div>
                {/*    end*/}
                        <div className="text-center pt-16 ">
                            <div className="font-extrabold">
                            Subscription
                            </div>
                            <div className="text-4xl mt-6 font-extrabold">
                                Stay up to date on Web3Games
                            </div>
                            <div className="mt-5 md:flex justify-center">
                                <input type="text"
                                       className="bg-gray-600 text-lg rounded-full p-3 md:p-6  w-9/12 lg:w-8/12 xl:w-5/12 border hover:border-indigo-500 "
                                       placeholder="Email"/>
                                <p className="flex justify-center text-center text-base font-medium text-gray-500">
                                    <button  className="text-lg whitespace-nowrap border-2 border-yellow-400 inline-flex items-center md:-ml-44 md:mt-1 md:mb-1 mt-6 py-3 px-24 justify-center md:px-10  border border-transparent rounded-full shadow-sm text-base font-medium text-black bg-white transform duration-500 hover:shadow-2xl "
                                    >
                                        Subscribe
                                    </button>
                                </p>
                            </div>
                            <div className="mt-48 border-t ">
                                <div className="flex justify-center">
                                    <img
                                        className="w-72  " src="https://cdn.discordapp.com/attachments/897398778166906911/916731990269644902/11.png" alt=""/>
                                </div>
                                <div className="border-b">
                                    <div className="md:pt-10 pt-5  sm:px-6 lg:px-8 ">
                                        <div className="md:flex md:justify-around">
                                            {toend.map((ends)=>(
                                                <div key={ends.title} className="">
                                                    <div className="mb-6">
                                                        <h1 className="flex justify-center text-xl font-bold text-black mb-4">
                                                            {ends.title}
                                                        </h1>
                                                        <h2 className="">
                                                            <p className="flex mb-2 justify-center text-gray-400 hover:text-black hover:underline delay-75">
                                                                <a href={ends.h1url}>{ends.h1}</a></p>
                                                            <p className="flex mb-2 justify-center text-gray-400 hover:text-black  hover:underline delay-75">
                                                                <a href={ends.h2url}>{ends.h2}</a></p>
                                                            <p className="flex mb-2 justify-center text-gray-400 hover:text-black hover:underline delay-75">
                                                                <a href={ends.h3url}>{ends.h3}</a></p>
                                                            <p className="flex mb-2 justify-center text-gray-400 hover:text-black hover:underline delay-75">
                                                                <a href={ends.h4url}>{ends.h4}</a></p>
                                                        </h2>
                                                    </div>
                                                </div>))}
                                        </div>



                                    </div>

                                </div>
                                <p className=" text-center p-5 text-left  text-sm font-semibold uppercase text-gray-500 tracking-wide">
                                    ©2021 CRYPTOFISHING, A PLAYERLINK COMPANY. All RIGHTS RESERVED.
                                </p>
                                </div>


                        </div>
                </div>

                </div>
                {/* More main page content here... */}
            </main>
        </div>
    )
}
