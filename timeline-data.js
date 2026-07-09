const TIMELINE_HTML = `
<div class="tl-grid">
    <div class="tl-col">
        <div class="tl-year-text">1991</div>
        <div class="tl-nodes-container">
            <a href="single.html#sg01" class="tl-node" draggable="false"
			   data-type="single"
               data-thumb="assets/disco-cover-photo/sg/sg01.jpg"
               data-title="1st Single"
               data-sub="Good-bye My Loneliness"
               data-released="1991.02.10"
               data-label="PODH-1029"
			   data-tieup='"Kekkon no Risou to Genjitsu" Theme Song'>
                <img src="assets/disco-cover-photo/sg/sg-tl-thumb/sg01.jpg" draggable="false">
            </a>
			<a href="#" class="tl-node" draggable="false"
			   data-type="album"
               data-thumb="assets/disco-cover-photo/al/al01.jpg"
               data-title="1st Album"
               data-sub="Good-bye My Loneliness"
               data-released="1991.03.27"
               data-label="POCH-1082">
                <img src="assets/disco-cover-photo/al/al-tl-thumb/al01.jpg" draggable="false">
            </a>
            <a href="single.html#sg02" class="tl-node" draggable="false"
			   data-type="single"
               data-thumb="assets/disco-cover-photo/sg/sg02.jpg"
               data-title="2nd Single"
               data-sub="Fushigi ne..."
               data-released="1991.06.25"
               data-label="PODH-1040"
			   data-tieup='"Magical Zunou Power!!" Theme Song'>
                <img src="assets/disco-cover-photo/sg/sg-tl-thumb/sg02.jpg" draggable="false">
            </a>
			<a href="single.html#sg03" class="tl-node" draggable="false"
			   data-type="single"
               data-thumb="assets/disco-cover-photo/sg/sg03.jpg"
               data-title="3rd Single"
               data-sub="Mou Sagasanai"
               data-released="1991.11.06"
               data-label="PODH-1060"
			   data-tieup='"Shichinin no Onna Bengoshi Season 2" Theme Song'>
                <img src="assets/disco-cover-photo/sg/sg-tl-thumb/sg03.jpg" draggable="false">
            </a>
			<a href="#" class="tl-node" draggable="false"
			   data-type="album"
               data-thumb="assets/disco-cover-photo/al/al02.jpg"
               data-title="2nd Album"
               data-sub="Mou Sagasanai"
               data-released="1991.12.25"
               data-label="POCH-1111">
                <img src="assets/disco-cover-photo/al/al-tl-thumb/al02.jpg" draggable="false">
            </a>
        </div>
    </div>

    <div class="tl-col">
        <div class="tl-year-text">1992</div>
        <div class="tl-nodes-container">
            <a href="single.html#sg04" class="tl-node" draggable="false"
			   data-type="single"
               data-thumb="assets/disco-cover-photo/sg/sg04.jpg"
               data-title="4th Single"
               data-sub="Nemurenai Yoru wo Daite"
               data-released="1992.08.05"
               data-label="PODH-1087"
			   data-tieup='"Tonight" Ending Theme'>
                <img src="assets/disco-cover-photo/sg/sg-tl-thumb/sg04.jpg" draggable="false">
            </a>
            <div class="tl-node empty"></div>
        </div>
    </div>

    <div class="tl-col"><div class="tl-year-text">1993</div><div class="tl-nodes-container"><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div></div></div>
    <div class="tl-col"><div class="tl-year-text">1994</div><div class="tl-nodes-container"><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div></div></div>
    <div class="tl-col"><div class="tl-year-text">1995</div><div class="tl-nodes-container"><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div></div></div>
    <div class="tl-col"><div class="tl-year-text">1996</div><div class="tl-nodes-container"><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div></div></div>
	<div class="tl-col"><div class="tl-year-text">1997</div><div class="tl-nodes-container"><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div></div></div>
	<div class="tl-col"><div class="tl-year-text">1998</div><div class="tl-nodes-container"><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div></div></div>
	<div class="tl-col"><div class="tl-year-text">1999</div><div class="tl-nodes-container"><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div></div></div>
	<div class="tl-col"><div class="tl-year-text">2000</div><div class="tl-nodes-container"><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div></div></div>
	<div class="tl-col"><div class="tl-year-text">2001</div><div class="tl-nodes-container"><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div></div></div>
	<div class="tl-col"><div class="tl-year-text">2002</div><div class="tl-nodes-container"><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div></div></div>
	<div class="tl-col"><div class="tl-year-text">2003</div><div class="tl-nodes-container"><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div></div></div>
	<div class="tl-col"><div class="tl-year-text">2004</div><div class="tl-nodes-container"><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div></div></div>
	<div class="tl-col"><div class="tl-year-text">2005</div><div class="tl-nodes-container"><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div></div></div>
	<div class="tl-col"><div class="tl-year-text">2006</div><div class="tl-nodes-container"><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div></div></div>
	<div class="tl-col"><div class="tl-year-text">2007</div><div class="tl-nodes-container"><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div></div></div>
	<div class="tl-col"><div class="tl-year-text">2008</div><div class="tl-nodes-container"><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div></div></div>
	<div class="tl-col"><div class="tl-year-text">2009</div><div class="tl-nodes-container"><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div></div></div>
	<div class="tl-col"><div class="tl-year-text">2010</div><div class="tl-nodes-container"><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div></div></div>
	<div class="tl-col"><div class="tl-year-text">2011</div><div class="tl-nodes-container"><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div></div></div>
    <div class="tl-col"><div class="tl-year-text">2012</div><div class="tl-nodes-container"><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div></div></div>
	<div class="tl-col"><div class="tl-year-text">2013</div><div class="tl-nodes-container"><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div></div></div>
	<div class="tl-col"><div class="tl-year-text">2014</div><div class="tl-nodes-container"><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div></div></div>
	<div class="tl-col"><div class="tl-year-text">2015</div><div class="tl-nodes-container"><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div></div></div>
	<div class="tl-col"><div class="tl-year-text">2016</div><div class="tl-nodes-container"><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div></div></div>
	<div class="tl-col"><div class="tl-year-text">2017</div><div class="tl-nodes-container"><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div></div></div>
	<div class="tl-col"><div class="tl-year-text">2018</div><div class="tl-nodes-container"><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div></div></div>
	<div class="tl-col"><div class="tl-year-text">2019</div><div class="tl-nodes-container"><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div></div></div>
	<div class="tl-col"><div class="tl-year-text">2020</div><div class="tl-nodes-container"><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div></div></div>
	<div class="tl-col"><div class="tl-year-text">2021</div><div class="tl-nodes-container"><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div></div></div>
	<div class="tl-col"><div class="tl-year-text">2022</div><div class="tl-nodes-container"><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div></div></div>
	<div class="tl-col"><div class="tl-year-text">2023</div><div class="tl-nodes-container"><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div></div></div>
	<div class="tl-col"><div class="tl-year-text">2024</div><div class="tl-nodes-container"><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div></div></div>
	<div class="tl-col"><div class="tl-year-text">2025</div><div class="tl-nodes-container"><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div></div></div>
	<div class="tl-col"><div class="tl-year-text">2026</div><div class="tl-nodes-container"><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div><div class="tl-node empty"></div></div></div>
</div>
`;