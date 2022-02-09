import React from 'react'
import '../styles/RecommendedVideos.css';
import VideoCard from './VideoCard'
function RecommenderVideos() {
  return (
    <div className='recommendedVideos'>
        <h2>Recommended</h2>
        <div className="recommendedVideos__videos">
          {/* <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/> */}
          <VideoCard 
          title="Amazon SDE1 45.5 Lac Detailed CTC Breakdown | Base, Bonus, Stocks, Benefits"
          views="7.1k views"
          timestamp="Jan 21,2022"
          channelImage="https://yt3.ggpht.com/C3s-9KNhCtkX9UAhIktZNAngThkd4MUmt3V3GXKDzDzGuIueIR0u3bRpNc-4cnyRRTTeh9AHgA=s88-c-k-c0x00ffffff-no-rj"
          channel="Lead Coding by FRAZ"
          image="https://i.ytimg.com/vi/lt-OmWiNfk0/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAO9uRjT3QSKjDhLivwicJ0sYVNQg"
          />
           <VideoCard 
          title="Salamat Full Song with Lyrics | SARBJIT | Randeep Hooda, Richa Chadda | T-Series"
          views="65M views"
          timestamp="May 5,2016"
          channelImage="https://yt3.ggpht.com/DzaZaTX6gdgjjPI_vkNc2dPbI794UroI9fTAunua0fa7lukDj5NDkjfhS5-w2KXuvXS02r92=s88-c-k-c0x00ffffff-no-rj"
          channel="T-Series"
          image="https://i.ytimg.com/an_webp/6XNTtcvErZc/mqdefault_6s.webp?du=3000&sqp=CKPyjpAG&rs=AOn4CLCNB66JxwV0BLOdPgV5yABYfEhD_g"
          />
          <VideoCard 
          title="Kabhii Tumhhe - Full Song Video|Shershaah|Sidharth–Kiara| Javed-Mohsin| Darshan Raval
          "
          views="7.3M views"
          timestamp="Oct 21,2021"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLQb29pcnUPnEwJ3kIHBHVPXptRbELdoEkdDnxPRrQ=s88-c-k-c0x00ffffff-no-rj"
          channel="SonyMusicIndiaVEVO"
          image="https://i.ytimg.com/vi/Lg7e_QHHrW4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBjYWwyP6-qH34opEkhNadn3rgwXA"
          />
          <VideoCard 
          title="Build and Deploy a Modern Web 3.0 Blockchain App | Solidity, Smart Contracts, Crypto"
          views="5.3M views"
          timestamp="Dec 28,2021"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLSmjxIU9yuwvDGSuHZ88rKyfjRSmHJeKFmQZbnFiQ=s88-c-k-c0x00ffffff-no-rj"
          channel="JavaScript Mastery"
          image="https://i.ytimg.com/vi/Wn_Kb3MR_cU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArMmNkK5QQ9s9WGLIkILcBkypDVw"
          />
          <VideoCard 
          title="Amazon SDE1 45.5 Lac Detailed CTC Breakdown | Base, Bonus, Stocks, Benefits"
          views="7.1k views"
          timestamp="Jan 21,2022"
          channelImage="https://yt3.ggpht.com/C3s-9KNhCtkX9UAhIktZNAngThkd4MUmt3V3GXKDzDzGuIueIR0u3bRpNc-4cnyRRTTeh9AHgA=s88-c-k-c0x00ffffff-no-rj"
          channel="Lead Coding by FRAZ"
          image="https://i.ytimg.com/vi/lt-OmWiNfk0/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAO9uRjT3QSKjDhLivwicJ0sYVNQg"
          />
           <VideoCard 
          title="Salamat Full Song with Lyrics | SARBJIT | Randeep Hooda, Richa Chadda | T-Series"
          views="65M views"
          timestamp="May 5,2016"
          channelImage="https://yt3.ggpht.com/DzaZaTX6gdgjjPI_vkNc2dPbI794UroI9fTAunua0fa7lukDj5NDkjfhS5-w2KXuvXS02r92=s88-c-k-c0x00ffffff-no-rj"
          channel="T-Series"
          image="https://i.ytimg.com/an_webp/6XNTtcvErZc/mqdefault_6s.webp?du=3000&sqp=CKPyjpAG&rs=AOn4CLCNB66JxwV0BLOdPgV5yABYfEhD_g"
          />
          <VideoCard 
          title="Kabhii Tumhhe - Full Song Video|Shershaah|Sidharth–Kiara| Javed-Mohsin| Darshan Raval
          "
          views="7.3M views"
          timestamp="Oct 21,2021"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLQb29pcnUPnEwJ3kIHBHVPXptRbELdoEkdDnxPRrQ=s88-c-k-c0x00ffffff-no-rj"
          channel="SonyMusicIndiaVEVO"
          image="https://i.ytimg.com/vi/Lg7e_QHHrW4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBjYWwyP6-qH34opEkhNadn3rgwXA"
          />
          <VideoCard 
          title="Build and Deploy a Modern Web 3.0 Blockchain App | Solidity, Smart Contracts, Crypto"
          views="5.3M views"
          timestamp="Dec 28,2021"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLSmjxIU9yuwvDGSuHZ88rKyfjRSmHJeKFmQZbnFiQ=s88-c-k-c0x00ffffff-no-rj"
          channel="JavaScript Mastery"
          image="https://i.ytimg.com/vi/Wn_Kb3MR_cU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArMmNkK5QQ9s9WGLIkILcBkypDVw"
          />
          <VideoCard 
          title="Amazon SDE1 45.5 Lac Detailed CTC Breakdown | Base, Bonus, Stocks, Benefits"
          views="7.1k views"
          timestamp="Jan 21,2022"
          channelImage="https://yt3.ggpht.com/C3s-9KNhCtkX9UAhIktZNAngThkd4MUmt3V3GXKDzDzGuIueIR0u3bRpNc-4cnyRRTTeh9AHgA=s88-c-k-c0x00ffffff-no-rj"
          channel="Lead Coding by FRAZ"
          image="https://i.ytimg.com/vi/lt-OmWiNfk0/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAO9uRjT3QSKjDhLivwicJ0sYVNQg"
          />
           <VideoCard 
          title="Salamat Full Song with Lyrics | SARBJIT | Randeep Hooda, Richa Chadda | T-Series"
          views="65M views"
          timestamp="May 5,2016"
          channelImage="https://yt3.ggpht.com/DzaZaTX6gdgjjPI_vkNc2dPbI794UroI9fTAunua0fa7lukDj5NDkjfhS5-w2KXuvXS02r92=s88-c-k-c0x00ffffff-no-rj"
          channel="T-Series"
          image="https://i.ytimg.com/an_webp/6XNTtcvErZc/mqdefault_6s.webp?du=3000&sqp=CKPyjpAG&rs=AOn4CLCNB66JxwV0BLOdPgV5yABYfEhD_g"
          />
          <VideoCard 
          title="Kabhii Tumhhe - Full Song Video|Shershaah|Sidharth–Kiara| Javed-Mohsin| Darshan Raval
          "
          views="7.3M views"
          timestamp="Oct 21,2021"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLQb29pcnUPnEwJ3kIHBHVPXptRbELdoEkdDnxPRrQ=s88-c-k-c0x00ffffff-no-rj"
          channel="SonyMusicIndiaVEVO"
          image="https://i.ytimg.com/vi/Lg7e_QHHrW4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBjYWwyP6-qH34opEkhNadn3rgwXA"
          />
          <VideoCard 
          title="Build and Deploy a Modern Web 3.0 Blockchain App | Solidity, Smart Contracts, Crypto"
          views="5.3M views"
          timestamp="Dec 28,2021"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLSmjxIU9yuwvDGSuHZ88rKyfjRSmHJeKFmQZbnFiQ=s88-c-k-c0x00ffffff-no-rj"
          channel="JavaScript Mastery"
          image="https://i.ytimg.com/vi/Wn_Kb3MR_cU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArMmNkK5QQ9s9WGLIkILcBkypDVw"
          />
          <VideoCard 
          title="Amazon SDE1 45.5 Lac Detailed CTC Breakdown | Base, Bonus, Stocks, Benefits"
          views="7.1k views"
          timestamp="Jan 21,2022"
          channelImage="https://yt3.ggpht.com/C3s-9KNhCtkX9UAhIktZNAngThkd4MUmt3V3GXKDzDzGuIueIR0u3bRpNc-4cnyRRTTeh9AHgA=s88-c-k-c0x00ffffff-no-rj"
          channel="Lead Coding by FRAZ"
          image="https://i.ytimg.com/vi/lt-OmWiNfk0/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAO9uRjT3QSKjDhLivwicJ0sYVNQg"
          />
           <VideoCard 
          title="Salamat Full Song with Lyrics | SARBJIT | Randeep Hooda, Richa Chadda | T-Series"
          views="65M views"
          timestamp="May 5,2016"
          channelImage="https://yt3.ggpht.com/DzaZaTX6gdgjjPI_vkNc2dPbI794UroI9fTAunua0fa7lukDj5NDkjfhS5-w2KXuvXS02r92=s88-c-k-c0x00ffffff-no-rj"
          channel="T-Series"
          image="https://i.ytimg.com/an_webp/6XNTtcvErZc/mqdefault_6s.webp?du=3000&sqp=CKPyjpAG&rs=AOn4CLCNB66JxwV0BLOdPgV5yABYfEhD_g"
          />
          <VideoCard 
          title="Kabhii Tumhhe - Full Song Video|Shershaah|Sidharth–Kiara| Javed-Mohsin| Darshan Raval
          "
          views="7.3M views"
          timestamp="Oct 21,2021"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLQb29pcnUPnEwJ3kIHBHVPXptRbELdoEkdDnxPRrQ=s88-c-k-c0x00ffffff-no-rj"
          channel="SonyMusicIndiaVEVO"
          image="https://i.ytimg.com/vi/Lg7e_QHHrW4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBjYWwyP6-qH34opEkhNadn3rgwXA"
          />
          <VideoCard 
          title="Build and Deploy a Modern Web 3.0 Blockchain App | Solidity, Smart Contracts, Crypto"
          views="5.3M views"
          timestamp="Dec 28,2021"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLSmjxIU9yuwvDGSuHZ88rKyfjRSmHJeKFmQZbnFiQ=s88-c-k-c0x00ffffff-no-rj"
          channel="JavaScript Mastery"
          image="https://i.ytimg.com/vi/Wn_Kb3MR_cU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArMmNkK5QQ9s9WGLIkILcBkypDVw"
          />
        </div>
    </div>
  )
}

export default RecommenderVideos;