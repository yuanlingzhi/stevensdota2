function change(obj)
{
	//alert(obj.alt);
//=========================STRENGTH 1=============================
	if(obj.alt=="es")
	{
		$("es").className='heroImg1';
		$("cheroImage2").src="./img/hero/es.png";
		
		$("hero_name1").innerHTML="Earthshaker";
		$("hero_name2").innerHTML="Raigor Stonehoof";
		
		$("str").innerHTML="22+2.9";
		$("agi").innerHTML="12+1.4";
		$("int").innerHTML="16+1.8";
		
		$("skill_hot_1").innerHTML="F";
		$("skill_hot_2").innerHTML="E";
		$("skill_hot_3").innerHTML="A";
		$("skill_hot_4").innerHTML="C";
		
		$("skill_name_1").innerHTML="Fissure";
		$("skill_name_2").innerHTML="Enchant Totem";
		$("skill_name_3").innerHTML="Aftershock";
		$("skill_name_4").innerHTML="Echo Slam";
		
		$("main_str").style.borderColor="orange";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="sven")
	{
		$("sven").className='heroImg1';
		$("cheroImage2").src="./img/hero/sven.png";
		
		$("hero_name1").innerHTML="Rogue Knight";
		$("hero_name2").innerHTML="Sven";
		
		$("str").innerHTML="23+2.7";
		$("agi").innerHTML="21+2";
		$("int").innerHTML="14+1.3";
		
		$("skill_hot_1").innerHTML="T";
		$("skill_hot_2").innerHTML="C";
		$("skill_hot_3").innerHTML="W";
		$("skill_hot_4").innerHTML="R";
		
		$("skill_name_1").innerHTML="Storm Bolt";
		$("skill_name_2").innerHTML="Great Cleave";
		$("skill_name_3").innerHTML="Warcry";
		$("skill_name_4").innerHTML="God's Strength";
		
		$("main_str").style.borderColor="orange";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="tiny")
	{
		$("tiny").className='heroImg1';
		$("cheroImage2").src="./img/hero/tiny.png";
		
		$("hero_name1").innerHTML="Stone Giant";
		$("hero_name2").innerHTML="Tiny";
		
		$("str").innerHTML="24+3";
		$("agi").innerHTML="9+0.9";
		$("int").innerHTML="14+1.6";
		
		$("skill_hot_1").innerHTML="V";
		$("skill_hot_2").innerHTML="T";
		$("skill_hot_3").innerHTML="C";
		$("skill_hot_4").innerHTML="W";
		
		$("skill_name_1").innerHTML="Avalanche";
		$("skill_name_2").innerHTML="Toss";
		$("skill_name_3").innerHTML="Craggy Exterior";
		$("skill_name_4").innerHTML="Grow!";
		
		$("main_str").style.borderColor="orange";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="coco")
	{
		$("coco").className='heroImg1';
		$("cheroImage2").src="./img/hero/coco.png";
		
		$("hero_name1").innerHTML="Admiral";
		$("hero_name2").innerHTML="Daelin Proudmoore";
		
		$("str").innerHTML="24+3";
		$("agi").innerHTML="14+1.3";
		$("int").innerHTML="18+1.5";
		
		$("skill_hot_1").innerHTML="E";
		$("skill_hot_2").innerHTML="D";
		$("skill_hot_3").innerHTML="X";
		$("skill_hot_4").innerHTML="T";
		
		$("skill_name_1").innerHTML="Torrent";
		$("skill_name_2").innerHTML="Tidebringer";
		$("skill_name_3").innerHTML="X Marks The Spot";
		$("skill_name_4").innerHTML="Ghost Ship";
		
		$("main_str").style.borderColor="orange";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="bm")
	{
		$("bm").className='heroImg1';
		$("cheroImage2").src="./img/hero/bm.png";
		
		$("hero_name1").innerHTML="Beastmaster";
		$("hero_name2").innerHTML="Rexxar";
		
		$("str").innerHTML="23+2.2";
		$("agi").innerHTML="18+1.6";
		$("int").innerHTML="16+1.9";
		
		$("skill_hot_1").innerHTML="W";
		$("skill_hot_2").innerHTML="D";
		$("skill_hot_3").innerHTML="B";
		$("skill_hot_4").innerHTML="R";
		
		$("skill_name_1").innerHTML="Wild Axes";
		$("skill_name_2").innerHTML="Call of the Wild";
		$("skill_name_3").innerHTML="Inner Beast";
		$("skill_name_4").innerHTML="Primal roar";
		
		$("main_str").style.borderColor="orange";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="dk")
	{
		$("dk").className='heroImg1';
		$("cheroImage2").src="./img/hero/dk.png";
		
		$("hero_name1").innerHTML="Dragon Knight";
		$("hero_name2").innerHTML="Knight Davion";
		
		$("str").innerHTML="19+2.8";
		$("agi").innerHTML="19+2.2";
		$("int").innerHTML="15+1.7";
		
		$("skill_hot_1").innerHTML="F";
		$("skill_hot_2").innerHTML="T";
		$("skill_hot_3").innerHTML="D";
		$("skill_hot_4").innerHTML="R";
		
		$("skill_name_1").innerHTML="Breathe Fire";
		$("skill_name_2").innerHTML="Dragon Tail";
		$("skill_name_3").innerHTML="Dragon Blood";
		$("skill_name_4").innerHTML="Elder Dragon Form";
		
		$("main_str").style.borderColor="orange";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="cg")
	{
		$("cg").className='heroImg1';
		$("cheroImage2").src="./img/hero/bm.png";
		
		$("hero_name1").innerHTML="Clockwerk Goblin";
		$("hero_name2").innerHTML="Rattletrap";
		
		$("str").innerHTML="24+2.7";
		$("agi").innerHTML="13+2.3";
		$("int").innerHTML="17+1.3";
		
		$("skill_hot_1").innerHTML="E";
		$("skill_hot_2").innerHTML="C";
		$("skill_hot_3").innerHTML="R";
		$("skill_hot_4").innerHTML="T";
		
		$("skill_name_1").innerHTML="Battery Assault";
		$("skill_name_2").innerHTML="Power Cogs";
		$("skill_name_3").innerHTML="Rocket Flare";
		$("skill_name_4").innerHTML="Hookshot";
		
		$("main_str").style.borderColor="orange";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="ok")
	{
		$("ok").className='heroImg1';
		$("cheroImage2").src="./img/hero/ok.png";
		
		$("hero_name1").innerHTML="Omniknight";
		$("hero_name2").innerHTML="Purist Thunderwrath";
		
		$("str").innerHTML="20+2.65";
		$("agi").innerHTML="15+1.75";
		$("int").innerHTML="17+1.8";
		
		$("skill_hot_1").innerHTML="R";
		$("skill_hot_2").innerHTML="E";
		$("skill_hot_3").innerHTML="D";
		$("skill_hot_4").innerHTML="G";
		
		$("skill_name_1").innerHTML="Purification";
		$("skill_name_2").innerHTML="Repel";
		$("skill_name_3").innerHTML="Degen Aura";
		$("skill_name_4").innerHTML="Guardian Angel";
		
		$("main_str").style.borderColor="orange";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="huskar")
	{
		$("huskar").className='heroImg1';
		$("cheroImage2").src="./img/hero/huskar.png";
		
		$("hero_name1").innerHTML="Sacred Warrior";
		$("hero_name2").innerHTML="Huskar";
		
		$("str").innerHTML="21+2.4";
		$("agi").innerHTML="15+14";
		$("int").innerHTML="18+1.5";
		
		$("skill_hot_1").innerHTML="V";
		$("skill_hot_2").innerHTML="R";
		$("skill_hot_3").innerHTML="B";
		$("skill_hot_4").innerHTML="F";
		
		$("skill_name_1").innerHTML="Inner Vitality";
		$("skill_name_2").innerHTML="Burning Spear";
		$("skill_name_3").innerHTML="Berserker's Blood";
		$("skill_name_4").innerHTML="Life Break";
		
		$("main_str").style.borderColor="orange";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="ga")
	{
		$("ga").className='heroImg1';
		$("cheroImage2").src="./img/hero/ga.png";
		
		$("hero_name1").innerHTML="Goblin Alchemist";
		$("hero_name2").innerHTML="Razzil Darkbrew";
		
		$("str").innerHTML="25+1.8";
		$("agi").innerHTML="11+1.2";
		$("int").innerHTML="25+1.8";
		
		$("skill_hot_1").innerHTML="D";
		$("skill_hot_2").innerHTML="E";
		$("skill_hot_3").innerHTML="G";
		$("skill_hot_4").innerHTML="R";
		
		$("skill_name_1").innerHTML="Acid Spray";
		$("skill_name_2").innerHTML="Unstable Concoction";
		$("skill_name_3").innerHTML="Goblin's Greed ";
		$("skill_name_4").innerHTML="Chemical Rage";
		
		$("main_str").style.borderColor="orange";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="panda")
	{
		$("panda").className='heroImg1';
		$("cheroImage2").src="./img/hero/panda.png";
		
		$("hero_name1").innerHTML="Pandaren Brewmaster";
		$("hero_name2").innerHTML="Mangix";
		
		$("str").innerHTML="23+2.9";
		$("agi").innerHTML="22+1.95";
		$("int").innerHTML="14+1.25";
		
		$("skill_hot_1").innerHTML="C";
		$("skill_hot_2").innerHTML="D";
		$("skill_hot_3").innerHTML="B";
		$("skill_hot_4").innerHTML="R";
		
		$("skill_name_1").innerHTML="Thunder Clap";
		$("skill_name_2").innerHTML="Drunken Haze";
		$("skill_name_3").innerHTML="Drunken Brawler";
		$("skill_name_4").innerHTML="Primal Split";
		
		$("main_str").style.borderColor="orange";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="tp")
	{
		$("tp").className='heroImg1';
		$("cheroImage2").src="./img/hero/tp.png";
		
		$("hero_name1").innerHTML="Treant Protector";
		$("hero_name2").innerHTML="Rooftrellen";
		
		$("str").innerHTML="25+3.3";
		$("agi").innerHTML="15+2";
		$("int").innerHTML="17+1.8";
		
		$("skill_hot_1").innerHTML="T";
		$("skill_hot_2").innerHTML="E";
		$("skill_hot_3").innerHTML="V";
		$("skill_hot_4").innerHTML="R";
		
		$("skill_name_1").innerHTML="Nature's Guise";
		$("skill_name_2").innerHTML="Leech Seed";
		$("skill_name_3").innerHTML="Living Armor";
		$("skill_name_4").innerHTML="Overgrowth";
		
		$("main_str").style.borderColor="orange";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="io")
	{
		$("io").className='heroImg1';
		$("cheroImage2").src="./img/hero/io.png";
		
		$("hero_name1").innerHTML="Guardian Wisp";
		$("hero_name2").innerHTML="Io";
		
		$("str").innerHTML="17+1.9";
		$("agi").innerHTML="14+1.6";
		$("int").innerHTML="23+1.7";
		
		$("skill_hot_1").innerHTML="T";
		$("skill_hot_2").innerHTML="W";
		$("skill_hot_3").innerHTML="V";
		$("skill_hot_4").innerHTML="R";
		
		$("skill_name_1").innerHTML="Tether";
		$("skill_name_2").innerHTML="Spirits";
		$("skill_name_3").innerHTML="Overcharge";
		$("skill_name_4").innerHTML="Relocate";
		
		$("main_str").style.borderColor="orange";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="cw")
	{
		$("cw").className='heroImg1';
		$("cheroImage2").src="./img/hero/cw.png";
		
		$("hero_name1").innerHTML="Centaur Warchief";
		$("hero_name2").innerHTML="Bradwarden";
		
		$("str").innerHTML="23+3.8";
		$("agi").innerHTML="15+2";
		$("int").innerHTML="15+1.6";
		
		$("skill_hot_1").innerHTML="F";
		$("skill_hot_2").innerHTML="D";
		$("skill_hot_3").innerHTML="R";
		$("skill_hot_4").innerHTML="T";
		
		$("skill_name_1").innerHTML="Hoof Stomp";
		$("skill_name_2").innerHTML="Double Edge";
		$("skill_name_3").innerHTML="Return";
		$("skill_name_4").innerHTML="Stampede";
		
		$("main_str").style.borderColor="orange";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="timber")
	{
		$("timber").className='heroImg1';
		$("cheroImage2").src="./img/hero/timber.png";
		
		$("hero_name1").innerHTML="Timber";
		$("hero_name2").innerHTML="Rizzrak";
		
		$("str").innerHTML="22+2.1";
		$("agi").innerHTML="16+1.3";
		$("int").innerHTML="21+2.4";
		
		$("skill_hot_1").innerHTML="D";
		$("skill_hot_2").innerHTML="R";
		$("skill_hot_3").innerHTML="N/A";
		$("skill_hot_4").innerHTML="C";
		
		$("skill_name_1").innerHTML="Whirling Death";
		$("skill_name_2").innerHTML="Timber Chain";
		$("skill_name_3").innerHTML="Reactive Armor";
		$("skill_name_4").innerHTML="Chakram";
		
		$("main_str").style.borderColor="orange";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="bb")
	{
		$("bb").className='heroImg1';
		$("cheroImage2").src="./img/hero/brist.png";
		
		$("hero_name1").innerHTML="Bristleback";
		$("hero_name2").innerHTML="Rigwarl";
		
		$("str").innerHTML="22+2.2";
		$("agi").innerHTML="17+1.8";
		$("int").innerHTML="14+2.8";
		
		$("skill_hot_1").innerHTML="G";
		$("skill_hot_2").innerHTML="R";
		$("skill_hot_3").innerHTML="K";
		$("skill_hot_4").innerHTML="W";
		
		$("skill_name_1").innerHTML="Viscous Nasal Goo";
		$("skill_name_2").innerHTML="Quill Spray";
		$("skill_name_3").innerHTML="Bristleback";
		$("skill_name_4").innerHTML="Warpath";
		
		$("main_str").style.borderColor="orange";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="tusk")
	{
		$("tusk").className='heroImg1';
		$("cheroImage2").src="./img/hero/snow.png";
		
		$("hero_name1").innerHTML="Tuskarr";
		$("hero_name2").innerHTML="Ymir";
		
		$("str").innerHTML="23+2.3";
		$("agi").innerHTML="23+2.1";
		$("int").innerHTML="18+1.7";
		
		$("skill_hot_1").innerHTML="E";
		$("skill_hot_2").innerHTML="W";
		$("skill_hot_3").innerHTML="F";
		$("skill_hot_4").innerHTML="R";
		
		$("skill_name_1").innerHTML="Ice Shards";
		$("skill_name_2").innerHTML="Snowball";
		$("skill_name_3").innerHTML="Frozen Sigil";
		$("skill_name_4").innerHTML="Walrus Punch";
		
		$("main_str").style.borderColor="orange";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="tc")
	{
		$("tc").className='heroImg1';
		$("cheroImage2").src="./img/hero/tc.png";
		
		$("hero_name1").innerHTML="Tauren Chieftain";
		$("hero_name2").innerHTML="Cairne Bloodhoof";
		
		$("str").innerHTML="24+2.3";
		$("agi").innerHTML="14+1.5";
		$("int").innerHTML="23+1.6";
		
		$("skill_hot_1").innerHTML="T";
		$("skill_hot_2").innerHTML="C";
		$("skill_hot_3").innerHTML="N";
		$("skill_hot_4").innerHTML="E";
		
		$("skill_name_1").innerHTML="Echo Stomp";
		$("skill_name_2").innerHTML="Ancestral Spirit";
		$("skill_name_3").innerHTML="Natural Order";
		$("skill_name_4").innerHTML="Earth Splitter";
		
		$("main_str").style.borderColor="orange";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="lc")
	{
		$("lc").className='heroImg1';
		$("cheroImage2").src="./img/hero/lc.png";
		
		$("hero_name1").innerHTML="Legion Commander";
		$("hero_name2").innerHTML="Tresdin";
		
		$("str").innerHTML="26+2.6";
		$("agi").innerHTML="18+1.7";
		$("int").innerHTML="20+2.2";
		
		$("skill_hot_1").innerHTML="W";
		$("skill_hot_2").innerHTML="T";
		$("skill_hot_3").innerHTML="N/A";
		$("skill_hot_4").innerHTML="D";
		
		$("skill_name_1").innerHTML="Overwhelming Odds";
		$("skill_name_2").innerHTML="Press The Attack";
		$("skill_name_3").innerHTML="Moment of Courage";
		$("skill_name_4").innerHTML="Duel";
		
		$("main_str").style.borderColor="orange";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="earth")
	{
		$("earth").className='heroImg1';
		$("cheroImage2").src="./img/hero/bm.png";
		
		$("hero_name1").innerHTML="Earth Spirit";
		$("hero_name2").innerHTML="Kaolin";
		
		$("str").innerHTML="21+2.9";
		$("agi").innerHTML="17+1.5";
		$("int").innerHTML="18+2.4";
		
		$("skill_hot_1").innerHTML="D";
		$("skill_hot_2").innerHTML="F";
		$("skill_hot_3").innerHTML="R";
		$("skill_hot_4").innerHTML="T";
		
		$("skill_name_1").innerHTML="Boulder Smash";
		$("skill_name_2").innerHTML="Rolling Boulder";
		$("skill_name_3").innerHTML="Geomagnetic Grip";
		$("skill_name_4").innerHTML="Magnetize";
		
		$("main_str").style.borderColor="orange";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="phoenix")
	{
		$("phoenix").className='heroImg1';
		$("cheroImage2").src="./img/hero/phoenix.png";
		
		$("hero_name1").innerHTML="Phoenix";
		$("hero_name2").innerHTML="Icarus";
		
		$("str").innerHTML="17+2.9";
		$("agi").innerHTML="12+1.3";
		$("int").innerHTML="18+1.8";
		
		$("skill_hot_1").innerHTML="D";
		$("skill_hot_2").innerHTML="F";
		$("skill_hot_3").innerHTML="R";
		$("skill_hot_4").innerHTML="V";
		
		$("skill_name_1").innerHTML="Icarus Dive";
		$("skill_name_2").innerHTML="Fire Spirits";
		$("skill_name_3").innerHTML="Sun Ray";
		$("skill_name_4").innerHTML="Supernova";
		
		$("main_str").style.borderColor="orange";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="transparent";
	}
//=========================STRENGTH 2=============================
	else if(obj.alt=="axe")
	{
		$("axe").className='heroImg1';
		$("cheroImage2").src="./img/hero/axe.png";
		
		$("hero_name1").innerHTML="Axe";
		$("hero_name2").innerHTML="Mogul Khan";
		
		$("str").innerHTML="25+2.5";
		$("agi").innerHTML="20+2.2";
		$("int").innerHTML="18+1.6";
		
		$("skill_hot_1").innerHTML="E";
		$("skill_hot_2").innerHTML="R";
		$("skill_hot_3").innerHTML="X";
		$("skill_hot_4").innerHTML="C";
		
		$("skill_name_1").innerHTML="Berserker's Call";
		$("skill_name_2").innerHTML="Battle Hunger";
		$("skill_name_3").innerHTML="Counter Helix";
		$("skill_name_4").innerHTML="Culling Blade";
		
		$("main_str").style.borderColor="orange";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="pudge")
	{
		$("pudge").className='heroImg1';
		$("cheroImage2").src="./img/hero/pudge.png";
		
		$("hero_name1").innerHTML="Butcher";
		$("hero_name2").innerHTML="Pudge";
		
		$("str").innerHTML="25+3.2";
		$("agi").innerHTML="14+1.5";
		$("int").innerHTML="13+1.5";
		
		$("skill_hot_1").innerHTML="T";
		$("skill_hot_2").innerHTML="R";
		$("skill_hot_3").innerHTML="F";
		$("skill_hot_4").innerHTML="D";
		
		$("skill_name_1").innerHTML="Meat Hook ";
		$("skill_name_2").innerHTML="Rot";
		$("skill_name_3").innerHTML="Flesh Heap";
		$("skill_name_4").innerHTML="Dismember";
		
		$("main_str").style.borderColor="orange";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="sk")
	{
		$("sk").className='heroImg1';
		$("cheroImage2").src="./img/hero/sk.png";
		
		$("hero_name1").innerHTML="Sand King";
		$("hero_name2").innerHTML="Crixalis";
		
		$("str").innerHTML="18+2.6";
		$("agi").innerHTML="19+2.1";
		$("int").innerHTML="16+1.8";
		
		$("skill_hot_1").innerHTML="E";
		$("skill_hot_2").innerHTML="R";
		$("skill_hot_3").innerHTML="L";
		$("skill_hot_4").innerHTML="C";
		
		$("skill_name_1").innerHTML="Burrowstrike";
		$("skill_name_2").innerHTML="Sand Storm";
		$("skill_name_3").innerHTML="Caustic Finale";
		$("skill_name_4").innerHTML="Epicenter";
		
		$("main_str").style.borderColor="orange";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="slardar")
	{
		$("slardar").className='heroImg1';
		$("cheroImage2").src="./img/hero/slardar.png";
		
		$("hero_name1").innerHTML="Slithereen Guard";
		$("hero_name2").innerHTML="Slardar";
		
		$("str").innerHTML="21+2.8";
		$("agi").innerHTML="17+2.4";
		$("int").innerHTML="15+1.5";
		
		$("skill_hot_1").innerHTML="T";
		$("skill_hot_2").innerHTML="R";
		$("skill_hot_3").innerHTML="B";
		$("skill_hot_4").innerHTML="G";
		
		$("skill_name_1").innerHTML="Sprint";
		$("skill_name_2").innerHTML="Slithereen Crush ";
		$("skill_name_3").innerHTML="Bash";
		$("skill_name_4").innerHTML="Amplify Damage";
		
		$("main_str").style.borderColor="orange";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="th")
	{
		$("th").className='heroImg1';
		$("cheroImage2").src="./img/hero/th.png";
		
		$("hero_name1").innerHTML="Tidehunter";
		$("hero_name2").innerHTML="Leviathan";
		
		$("str").innerHTML="23+2.2";
		$("agi").innerHTML="18+1.6";
		$("int").innerHTML="16+1.9";
		
		$("skill_hot_1").innerHTML="G";
		$("skill_hot_2").innerHTML="R";
		$("skill_hot_3").innerHTML="C";
		$("skill_hot_4").innerHTML="V";
		
		$("skill_name_1").innerHTML="Gush";
		$("skill_name_2").innerHTML="Kraken Shell";
		$("skill_name_3").innerHTML="Anchor Smash";
		$("skill_name_4").innerHTML="Ravage";
		
		$("main_str").style.borderColor="orange";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="snk")
	{
		$("snk").className='heroImg1';
		$("cheroImage2").src="./img/hero/snk.png";
		
		$("hero_name1").innerHTML="Skeleton King";
		$("hero_name2").innerHTML="King Leoric";
		
		$("str").innerHTML="22+2.9";
		$("agi").innerHTML="18+1.7";
		$("int").innerHTML="18+1.6";
		
		$("skill_hot_1").innerHTML="T";
		$("skill_hot_2").innerHTML="V";
		$("skill_hot_3").innerHTML="E";
		$("skill_hot_4").innerHTML="R";
		
		$("skill_name_1").innerHTML="Hellfire Blast";
		$("skill_name_2").innerHTML="Vampiric Aura";
		$("skill_name_3").innerHTML="Mortal Strike";
		$("skill_name_4").innerHTML="Reincarnation";
		
		$("main_str").style.borderColor="orange";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="naix")
	{
		$("naix").className='heroImg1';
		$("cheroImage2").src="./img/hero/naix.png";
		
		$("hero_name1").innerHTML="Lifestealer";
		$("hero_name2").innerHTML="N'aix";
		
		$("str").innerHTML="25+2.4";
		$("agi").innerHTML="18+1.9";
		$("int").innerHTML="15+1.75";
		
		$("skill_hot_1").innerHTML="R";
		$("skill_hot_2").innerHTML="F";
		$("skill_hot_3").innerHTML="W";
		$("skill_hot_4").innerHTML="T";
		
		$("skill_name_1").innerHTML="Rage";
		$("skill_name_2").innerHTML="Feast";
		$("skill_name_3").innerHTML="Open Wounds";
		$("skill_name_4").innerHTML="Infest";
		
		$("main_str").style.borderColor="orange";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="ns")
	{
		$("ns").className='heroImg1';
		$("cheroImage2").src="./img/hero/ns.png";
		
		$("hero_name1").innerHTML="Night Stalker";
		$("hero_name2").innerHTML="Balanar";
		
		$("str").innerHTML="23+2.8";
		$("agi").innerHTML="18+2.25";
		$("int").innerHTML="16+1.6";
		
		$("skill_hot_1").innerHTML="V";
		$("skill_hot_2").innerHTML="F";
		$("skill_hot_3").innerHTML="G";
		$("skill_hot_4").innerHTML="R";
		
		$("skill_name_1").innerHTML="Void";
		$("skill_name_2").innerHTML="Crippling Fear";
		$("skill_name_3").innerHTML="Hunter in the Night ";
		$("skill_name_4").innerHTML="Darkness";
		
		$("main_str").style.borderColor="orange";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="doom")
	{
		$("doom").className='heroImg1';
		$("cheroImage2").src="./img/hero/doom.png";
		
		$("hero_name1").innerHTML="Doom Bringer";
		$("hero_name2").innerHTML="Lucifer";
		
		$("str").innerHTML="26+3.2";
		$("agi").innerHTML="11+0.9";
		$("int").innerHTML="13+2.1";
		
		$("skill_hot_1").innerHTML="E";
		$("skill_hot_2").innerHTML="T";
		$("skill_hot_3").innerHTML="V";
		$("skill_hot_4").innerHTML="D";
		
		$("skill_name_1").innerHTML="Devour";
		$("skill_name_2").innerHTML="Scorched Earth";
		$("skill_name_3").innerHTML="LVL? Death";
		$("skill_name_4").innerHTML="Doom";
		
		$("main_str").style.borderColor="orange";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="sb")
	{
		$("sb").className='heroImg1';
		$("cheroImage2").src="./img/hero/sb.png";
		
		$("hero_name1").innerHTML="Spiritbreaker";
		$("hero_name2").innerHTML="Barathrum";
		
		$("str").innerHTML="29+2.4";
		$("agi").innerHTML="17+1.7";
		$("int").innerHTML="14+1.8";
		
		$("skill_hot_1").innerHTML="C";
		$("skill_hot_2").innerHTML="H";
		$("skill_hot_3").innerHTML="T";
		$("skill_hot_4").innerHTML="E";
		
		$("skill_name_1").innerHTML="Charge of Darkness";
		$("skill_name_2").innerHTML="Empowering Haste";
		$("skill_name_3").innerHTML="Greater Bash";
		$("skill_name_4").innerHTML="Nether Strike";
		
		$("main_str").style.borderColor="orange";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="lyc")
	{
		$("lyc").className='heroImg1';
		$("cheroImage2").src="./img/hero/lyc.png";
		
		$("hero_name1").innerHTML="Lycanthrope";
		$("hero_name2").innerHTML="Banehallow";
		
		$("str").innerHTML="22+2.75";
		$("agi").innerHTML="16+1.9";
		$("int").innerHTML="17+1.55";
		
		$("skill_hot_1").innerHTML="V";
		$("skill_hot_2").innerHTML="W";
		$("skill_hot_3").innerHTML="I";
		$("skill_hot_4").innerHTML="F";
		
		$("skill_name_1").innerHTML="Summon Wolves ";
		$("skill_name_2").innerHTML="Howl";
		$("skill_name_3").innerHTML="Feral Impulse";
		$("skill_name_4").innerHTML="Shapeshift";
		
		$("main_str").style.borderColor="orange";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="ck")
	{
		$("ck").className='heroImg1';
		$("cheroImage2").src="./img/hero/ck.png";
		
		$("hero_name1").innerHTML="Chaos Knight";
		$("hero_name2").innerHTML="Nessaj";
		
		$("str").innerHTML="20+2.9";
		$("agi").innerHTML="14+2.1";
		$("int").innerHTML="16+1.2";
		
		$("skill_hot_1").innerHTML="C";
		$("skill_hot_2").innerHTML="E";
		$("skill_hot_3").innerHTML="R";
		$("skill_hot_4").innerHTML="T";
		
		$("skill_name_1").innerHTML="Chaos Bolt";
		$("skill_name_2").innerHTML="Reality Rift";
		$("skill_name_3").innerHTML="Critical Strike";
		$("skill_name_4").innerHTML="Phantasm";
		
		$("main_str").style.borderColor="orange";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="undying")
	{
		$("undying").className='heroImg1';
		$("cheroImage2").src="./img/hero/undying.png";
		
		$("hero_name1").innerHTML="Pit Lord";
		$("hero_name2").innerHTML="Azgalor";
		
		$("str").innerHTML="25+2.6";
		$("agi").innerHTML="12+1.3";
		$("int").innerHTML="17+2.6";
		
		$("skill_hot_1").innerHTML="F";
		$("skill_hot_2").innerHTML="T";
		$("skill_hot_3").innerHTML="R";
		$("skill_hot_4").innerHTML="D";
		
		$("skill_name_1").innerHTML="Firestorm";
		$("skill_name_2").innerHTML="Pit of Malice";
		$("skill_name_3").innerHTML="Atrophy Aura";
		$("skill_name_4").innerHTML="Dark Rift";
		
		$("main_str").style.borderColor="orange";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="mag")
	{
		$("mag").className='heroImg1';
		$("cheroImage2").src="./img/hero/mag.png";
		
		$("hero_name1").innerHTML="Magnataur";
		$("hero_name2").innerHTML="Magnus";
		
		$("str").innerHTML="21+2.75";
		$("agi").innerHTML="15+2.5";
		$("int").innerHTML="19+1.65";
		
		$("skill_hot_1").innerHTML="W";
		$("skill_hot_2").innerHTML="E";
		$("skill_hot_3").innerHTML="D";
		$("skill_hot_4").innerHTML="V";
		
		$("skill_name_1").innerHTML="Shockwave";
		$("skill_name_2").innerHTML="Empower";
		$("skill_name_3").innerHTML="Skewer";
		$("skill_name_4").innerHTML="Reverse Polarity";
		
		$("main_str").style.borderColor="orange";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="abaddon")
	{
		$("abaddon").className='heroImg1';
		$("cheroImage2").src="./img/hero/abaddon.png";
		
		$("hero_name1").innerHTML="Lord of Avernus";
		$("hero_name2").innerHTML="baddon";
		
		$("str").innerHTML="23+2.7";
		$("agi").innerHTML="17+1.5";
		$("int").innerHTML="21+2";
		
		$("skill_hot_1").innerHTML="D";
		$("skill_hot_2").innerHTML="T";
		$("skill_hot_3").innerHTML="F";
		$("skill_hot_4").innerHTML="B";
		
		$("skill_name_1").innerHTML="Death Coil";
		$("skill_name_2").innerHTML="Aphotic Shield";
		$("skill_name_3").innerHTML="Frostmourne";
		$("skill_name_4").innerHTML="Borrowed Time";
		
		$("main_str").style.borderColor="orange";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="transparent";
	}	
//=========================AGILITY 1==============================
	else if(obj.alt=="am")
	{
		$("am").className='heroImg1';
		$("cheroImage2").src="./img/hero/am.png";
		
		$("hero_name1").innerHTML="Anti-Mage";
		$("hero_name2").innerHTML="Magina";
		
		$("str").innerHTML="20+1.2";
		$("agi").innerHTML="22+2.8";
		$("int").innerHTML="15+1.8";
		
		$("skill_hot_1").innerHTML="R";
		$("skill_hot_2").innerHTML="B";
		$("skill_hot_3").innerHTML="D";
		$("skill_hot_4").innerHTML="V";
		
		$("skill_name_1").innerHTML="Mana Break";
		$("skill_name_2").innerHTML="Blink";
		$("skill_name_3").innerHTML="Spell Shield";
		$("skill_name_4").innerHTML="Mana Void";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="orange";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="dr")
	{
		$("dr").className='heroImg1';
		$("cheroImage2").src="./img/hero/dr.png";
		
		$("hero_name1").innerHTML="Drow Ranger";
		$("hero_name2").innerHTML="Traxex";
		
		$("str").innerHTML="17+1.9";
		$("agi").innerHTML="26+1.9";
		$("int").innerHTML="15+1.4";
		
		$("skill_hot_1").innerHTML="R";
		$("skill_hot_2").innerHTML="E";
		$("skill_hot_3").innerHTML="T";
		$("skill_hot_4").innerHTML="M";
		
		$("skill_name_1").innerHTML="Frost Arrows";
		$("skill_name_2").innerHTML="Gust";
		$("skill_name_3").innerHTML="Trueshot Aura";
		$("skill_name_4").innerHTML="Marksmanship";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="orange";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="jugg")
	{
		$("jugg").className='heroImg1';
		$("cheroImage2").src="./img/hero/jugg.png";
		
		$("hero_name1").innerHTML="Juggernaut";
		$("hero_name2").innerHTML="Yurnero";
		
		$("str").innerHTML="20+1.9";
		$("agi").innerHTML="20+2.85";
		$("int").innerHTML="14+1.4";
		
		$("skill_hot_1").innerHTML="F";
		$("skill_hot_2").innerHTML="G";
		$("skill_hot_3").innerHTML="C";
		$("skill_hot_4").innerHTML="E";
		
		$("skill_name_1").innerHTML="Blade Fury";
		$("skill_name_2").innerHTML="Healing Ward";
		$("skill_name_3").innerHTML="Blade Dance";
		$("skill_name_4").innerHTML="Omnislash";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="orange";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="pom")
	{
		$("pom").className='heroImg1';
		$("cheroImage2").src="./img/hero/pom.png";
		
		$("hero_name1").innerHTML="Priestess of the Moon";
		$("hero_name2").innerHTML="Mirana Nightshade";
		
		$("str").innerHTML="23+2.2";
		$("agi").innerHTML="18+1.6";
		$("int").innerHTML="16+1.9";
		
		$("skill_hot_1").innerHTML="T";
		$("skill_hot_2").innerHTML="R";
		$("skill_hot_3").innerHTML="E";
		$("skill_hot_4").innerHTML="W";
		
		$("skill_name_1").innerHTML="Starfall";
		$("skill_name_2").innerHTML="Elune's Arrow";
		$("skill_name_3").innerHTML="Leap";
		$("skill_name_4").innerHTML="Moonlight Shadow";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="orange";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="mor")
	{
		$("mor").className='heroImg1';
		$("cheroImage2").src="./img/hero/mor.png";
		
		$("hero_name1").innerHTML="Morphling";
		$("hero_name2").innerHTML="Morphling";
		
		$("str").innerHTML="19+2";
		$("agi").innerHTML="24+3";
		$("int").innerHTML="17+1.5";
		
		$("skill_hot_1").innerHTML="W";
		$("skill_hot_2").innerHTML="E";
		$("skill_hot_3").innerHTML="D";
		$("skill_hot_4").innerHTML="R";
		
		$("skill_name_1").innerHTML="Waveform";
		$("skill_name_2").innerHTML="Adaptive Strike";
		$("skill_name_3").innerHTML="Morph";
		$("skill_name_4").innerHTML="Replicate";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="orange";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="pl")
	{
		$("pl").className='heroImg1';
		$("cheroImage2").src="./img/hero/pl.png";
		
		$("hero_name1").innerHTML="Phantom Lancer";
		$("hero_name2").innerHTML="Azwraith";
		
		$("str").innerHTML="18+1.7";
		$("agi").innerHTML="23+4.2";
		$("int").innerHTML="21+2";
		
		$("skill_hot_1").innerHTML="T";
		$("skill_hot_2").innerHTML="W";
		$("skill_hot_3").innerHTML="X";
		$("skill_hot_4").innerHTML="D";
		
		$("skill_name_1").innerHTML="Spirit Lance";
		$("skill_name_2").innerHTML="Doppelwalk";
		$("skill_name_3").innerHTML="Juxtapose";
		$("skill_name_4").innerHTML="Phantom Edge";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="orange";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="vs")
	{
		$("vs").className='heroImg1';
		$("cheroImage2").src="./img/hero/vs.png";
		
		$("hero_name1").innerHTML="Vengeful Spirit";
		$("hero_name2").innerHTML="Shendelzare Silkwood";
		
		$("str").innerHTML="18+2.6";
		$("agi").innerHTML="27+2.8";
		$("int").innerHTML="15+1.75";
		
		$("skill_hot_1").innerHTML="C";
		$("skill_hot_2").innerHTML="E";
		$("skill_hot_3").innerHTML="D";
		$("skill_hot_4").innerHTML="W";
		
		$("skill_name_1").innerHTML="Magic Missile";
		$("skill_name_2").innerHTML="Wave of Terror";
		$("skill_name_3").innerHTML="Command Aura";
		$("skill_name_4").innerHTML="Nether Swap";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="orange";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="sa")
	{
		$("sa").className='heroImg1';
		$("cheroImage2").src="./img/hero/sa.png";
		
		$("hero_name1").innerHTML="Stealth Assassin";
		$("hero_name2").innerHTML="Rikimaru";
		
		$("str").innerHTML="17+2";
		$("agi").innerHTML="34+2.9";
		$("int").innerHTML="14+1.3";
		
		$("skill_hot_1").innerHTML="C";
		$("skill_hot_2").innerHTML="B";
		$("skill_hot_3").innerHTML="K";
		$("skill_hot_4").innerHTML="R";
		
		$("skill_name_1").innerHTML="Smoke Screen";
		$("skill_name_2").innerHTML="Blink Strike";
		$("skill_name_3").innerHTML="Backstab";
		$("skill_name_4").innerHTML="Permanent Invisibility";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="orange";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="sniper")
	{
		$("sniper").className='heroImg1';
		$("cheroImage2").src="./img/hero/sniper.png";
		
		$("hero_name1").innerHTML="Dwarven Sniper";
		$("hero_name2").innerHTML="Kardel Sharpeye";
		
		$("str").innerHTML="16+1.7";
		$("agi").innerHTML="21+2.9";
		$("int").innerHTML="15+2.6";
		
		$("skill_hot_1").innerHTML="R";
		$("skill_hot_2").innerHTML="O";
		$("skill_hot_3").innerHTML="E";
		$("skill_hot_4").innerHTML="T";
		
		$("skill_name_1").innerHTML="Shrapnel";
		$("skill_name_2").innerHTML="Headshot";
		$("skill_name_3").innerHTML="Take Aim";
		$("skill_name_4").innerHTML="Assassinate";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="orange";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="ta")
	{
		$("ta").className='heroImg1';
		$("cheroImage2").src="./img/hero/ta.png";
		
		$("hero_name1").innerHTML="Templar Assassin";
		$("hero_name2").innerHTML="Lanaya";
		
		$("str").innerHTML="18+2.1";
		$("agi").innerHTML="23+2.7";
		$("int").innerHTML="20+2";
		
		$("skill_hot_1").innerHTML="R";
		$("skill_hot_2").innerHTML="D";
		$("skill_hot_3").innerHTML="B";
		$("skill_hot_4").innerHTML="C";
		
		$("skill_name_1").innerHTML="Refraction";
		$("skill_name_2").innerHTML="Meld";
		$("skill_name_3").innerHTML="Psi Blades";
		$("skill_name_4").innerHTML="Psionic Trap";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="orange";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="luna")
	{
		$("luna").className='heroImg1';
		$("cheroImage2").src="./img/hero/luna.png";
		
		$("hero_name1").innerHTML="Moon Rider";
		$("hero_name2").innerHTML="Luna Moonfang";
		
		$("str").innerHTML="15+1.9";		
		$("agi").innerHTML="18+2.8";
		$("int").innerHTML="16+1.85";
		
		$("skill_hot_1").innerHTML="C";
		$("skill_hot_2").innerHTML="G";
		$("skill_hot_3").innerHTML="L";
		$("skill_hot_4").innerHTML="E";
		
		$("skill_name_1").innerHTML="Lucent Beam";
		$("skill_name_2").innerHTML="Moon Glaive";
		$("skill_name_3").innerHTML="Lunar Blessing ";
		$("skill_name_4").innerHTML="Eclipse";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="orange";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="bh")
	{
		$("bh").className='heroImg1';
		$("cheroImage2").src="./img/hero/bh.png";
		
		$("hero_name1").innerHTML="Bounty Hunter";
		$("hero_name2").innerHTML="Gondar";
		
		$("str").innerHTML="17+1.8";
		$("agi").innerHTML="21+3";
		$("int").innerHTML="19+1.4";
		
		$("skill_hot_1").innerHTML="T";
		$("skill_hot_2").innerHTML="J";
		$("skill_hot_3").innerHTML="W";
		$("skill_hot_4").innerHTML="R";
		
		$("skill_name_1").innerHTML="Shuriken Toss";
		$("skill_name_2").innerHTML="Jinada";
		$("skill_name_3").innerHTML="Wind Walk";
		$("skill_name_4").innerHTML="Track";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="orange";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="ursa")
	{
		$("ursa").className='heroImg1';
		$("cheroImage2").src="./img/hero/ursa.png";
		
		$("hero_name1").innerHTML="Ursa Warrior";
		$("hero_name2").innerHTML="Ulfsaar";
		
		$("str").innerHTML="23+2.9";
		$("agi").innerHTML="18+2.1";
		$("int").innerHTML="16+1.5";
		
		$("skill_hot_1").innerHTML="E";
		$("skill_hot_2").innerHTML="V";
		$("skill_hot_3").innerHTML="W";
		$("skill_hot_4").innerHTML="R";
		
		$("skill_name_1").innerHTML="Earthshock";
		$("skill_name_2").innerHTML="Overpower";
		$("skill_name_3").innerHTML="Fury Swipes";
		$("skill_name_4").innerHTML="Enrage";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="orange";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="gyro")
	{
		$("gyro").className='heroImg1';
		$("cheroImage2").src="./img/hero/gyro.png";
		
		$("hero_name1").innerHTML="Gyrocopter";
		$("hero_name2").innerHTML="Aurel Vlaicu";
		
		$("str").innerHTML="18+1.8";
		$("agi").innerHTML="24+2.8";
		$("int").innerHTML="23+2.1";
		
		$("skill_hot_1").innerHTML="R";
		$("skill_hot_2").innerHTML="E";
		$("skill_hot_3").innerHTML="F";
		$("skill_hot_4").innerHTML="C";
		
		$("skill_name_1").innerHTML="Rocket Barrage";
		$("skill_name_2").innerHTML="Homing Missile";
		$("skill_name_3").innerHTML="Flak Cannon";
		$("skill_name_4").innerHTML="Call Down";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="orange";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="ld")
	{
		$("ld").className='heroImg1';
		$("cheroImage2").src="./img/hero/ld.png";
		
		$("hero_name1").innerHTML="Lone Druid";
		$("hero_name2").innerHTML="Syllabear";
		
		$("str").innerHTML="17+2.1";
		$("agi").innerHTML="24+2.7";
		$("int").innerHTML="13+1.4";
		
		$("skill_hot_1").innerHTML="B";
		$("skill_hot_2").innerHTML="R";
		$("skill_hot_3").innerHTML="Y";
		$("skill_hot_4").innerHTML="F";
		
		$("skill_name_1").innerHTML="Summon Spirit Bear";
		$("skill_name_2").innerHTML="Rabid";
		$("skill_name_3").innerHTML="Synergy";
		$("skill_name_4").innerHTML="True Form";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="orange";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="naga")
	{
		$("naga").className='heroImg1';
		$("cheroImage2").src="./img/hero/naga.png";
		
		$("hero_name1").innerHTML="Naga Siren";
		$("hero_name2").innerHTML="Slithice";
		
		$("str").innerHTML="21+2.3";
		$("agi").innerHTML="21+2.75";
		$("int").innerHTML="18+1.95";
		
		$("skill_hot_1").innerHTML="R";
		$("skill_hot_2").innerHTML="E";
		$("skill_hot_3").innerHTML="D";
		$("skill_hot_4").innerHTML="G";
		
		$("skill_name_1").innerHTML="Mirror Image";
		$("skill_name_2").innerHTML="Ensnare";
		$("skill_name_3").innerHTML="Rip Tide";
		$("skill_name_4").innerHTML="Song of the Siren";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="orange";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="troll")
	{
		$("troll").className='heroImg1';
		$("cheroImage2").src="./img/hero/troll.png";
		
		$("hero_name1").innerHTML="Troll Warlord";
		$("hero_name2").innerHTML="Jah'rakal";
		
		$("str").innerHTML="17+2.2";
		$("agi").innerHTML="21+2.75";
		$("int").innerHTML="13+1";
		
		$("skill_hot_1").innerHTML="G";
		$("skill_hot_2").innerHTML="E";
		$("skill_hot_3").innerHTML="F";
		$("skill_hot_4").innerHTML="R";
		
		$("skill_name_1").innerHTML="Berserker Rage";
		$("skill_name_2").innerHTML="Whirling Axes";
		$("skill_name_3").innerHTML="Fervor";
		$("skill_name_4").innerHTML="Battle Trance";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="orange";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="ember")
	{
		$("ember").className='heroImg1';
		$("cheroImage2").src="./img/hero/ember.png";
		
		$("hero_name1").innerHTML="Ember Spirit";
		$("hero_name2").innerHTML="Xin";
		
		$("str").innerHTML="19+2";
		$("agi").innerHTML="22+1.8";
		$("int").innerHTML="20+1.8";
		
		$("skill_hot_1").innerHTML="C";
		$("skill_hot_2").innerHTML="T";
		$("skill_hot_3").innerHTML="E";
		$("skill_hot_4").innerHTML="F";
		
		$("skill_name_1").innerHTML="Searing Chains";
		$("skill_name_2").innerHTML="Sleight of Fist";
		$("skill_name_3").innerHTML="Flame Guard";
		$("skill_name_4").innerHTML="Fire Remnant";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="orange";
		$("main_int").style.borderColor="transparent";
	}
//=========================AGILITY 2==============================
	else if(obj.alt=="bs")
	{
		$("bs").className='heroImg1';
		$("cheroImage2").src="./img/hero/bs.png";
		
		$("hero_name1").innerHTML="Bloodseeker";
		$("hero_name2").innerHTML="Strygwyr";
		
		$("str").innerHTML="23+2";
		$("agi").innerHTML="24+3.0";
		$("int").innerHTML="18+1.7";
		
		$("skill_hot_1").innerHTML="D";
		$("skill_hot_2").innerHTML="B";
		$("skill_hot_3").innerHTML="T";
		$("skill_hot_4").innerHTML="R";
		
		$("skill_name_1").innerHTML="Bloodrage";
		$("skill_name_2").innerHTML="Blood Bath";
		$("skill_name_3").innerHTML="Strygwyr's Thirst";
		$("skill_name_4").innerHTML="Rupture";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="orange";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="sf")
	{
		$("sf").className='heroImg1';
		$("cheroImage2").src="./img/hero/sf.png";
		
		$("hero_name1").innerHTML="Shadow Fiend";
		$("hero_name2").innerHTML="Nevermore";
		
		$("str").innerHTML="18+2";
		$("agi").innerHTML="20+2.9";
		$("int").innerHTML="15+2";
		
		$("skill_hot_1").innerHTML="Z";
		$("skill_hot_2").innerHTML="N";
		$("skill_hot_3").innerHTML="P";
		$("skill_hot_4").innerHTML="R";
		
		$("skill_name_1").innerHTML="Shadowraze";
		$("skill_name_2").innerHTML="Necromastery";
		$("skill_name_3").innerHTML="Presence of the Dark Lord";
		$("skill_name_4").innerHTML="Requiem of Souls";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="orange";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="razor")
	{
		$("razor").className='heroImg1';
		$("cheroImage2").src="./img/hero/razor.png";
		
		$("hero_name1").innerHTML="Beastmaster";
		$("hero_name2").innerHTML="Rexxar";
		
		$("str").innerHTML="21+2.3";
		$("agi").innerHTML="22+2.0";
		$("int").innerHTML="19+1.8";
		
		$("skill_hot_1").innerHTML="F";
		$("skill_hot_2").innerHTML="C";
		$("skill_hot_3").innerHTML="N";
		$("skill_hot_4").innerHTML="E";
		
		$("skill_name_1").innerHTML="Plasma Field";
		$("skill_name_2").innerHTML="Static Link";
		$("skill_name_3").innerHTML="Unstable Current";
		$("skill_name_4").innerHTML="Eye of the Storm";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="orange";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="veno")
	{
		$("veno").className='heroImg1';
		$("cheroImage2").src="./img/hero/veno.png";
		
		$("hero_name1").innerHTML="Venomancer";
		$("hero_name2").innerHTML="Lesale Deathbringer";
		
		$("str").innerHTML="18+1.85";
		$("agi").innerHTML="22+2.6";
		$("int").innerHTML="15+1.75";
		
		$("skill_hot_1").innerHTML="E";
		$("skill_hot_2").innerHTML="T";
		$("skill_hot_3").innerHTML="W";
		$("skill_hot_4").innerHTML="V";
		
		$("skill_name_1").innerHTML="Venomous Gale";
		$("skill_name_2").innerHTML="Poison Sting";
		$("skill_name_3").innerHTML="Plague Ward";
		$("skill_name_4").innerHTML="Poison Nova";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="orange";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="fv")
	{
		$("fv").className='heroImg1';
		$("cheroImage2").src="./img/hero/fv.png";
		
		$("hero_name1").innerHTML="Faceless Void";
		$("hero_name2").innerHTML="Darkterror";
		
		$("str").innerHTML="23+1.6";
		$("agi").innerHTML="20+2.65";
		$("int").innerHTML="15+1.5";
		
		$("skill_hot_1").innerHTML="W";
		$("skill_hot_2").innerHTML="R";
		$("skill_hot_3").innerHTML="E";
		$("skill_hot_4").innerHTML="C";
		
		$("skill_name_1").innerHTML="Time Walk";
		$("skill_name_2").innerHTML="Backtrack";
		$("skill_name_3").innerHTML="Time Lock";
		$("skill_name_4").innerHTML="Chronosphere";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="orange";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="pa")
	{
		$("pa").className='heroImg1';
		$("cheroImage2").src="./img/hero/pa.png";
		
		$("hero_name1").innerHTML="Phantom Assassin";
		$("hero_name2").innerHTML="Mortred";
		
		$("str").innerHTML="20+1.85";
		$("agi").innerHTML="23+3.15";
		$("int").innerHTML="13+1";
		
		$("skill_hot_1").innerHTML="D";
		$("skill_hot_2").innerHTML="B";
		$("skill_hot_3").innerHTML="R";
		$("skill_hot_4").innerHTML="C";
		
		$("skill_name_1").innerHTML="Stifling Dagger";
		$("skill_name_2").innerHTML="Phantom Strike ";
		$("skill_name_3").innerHTML="Blur";
		$("skill_name_4").innerHTML="Coup de Grace";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="orange";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="viper")
	{
		$("viper").className='heroImg1';
		$("cheroImage2").src="./img/hero/viper.png";
		
		$("hero_name1").innerHTML="Netherdrake";
		$("hero_name2").innerHTML="Viper";
		
		$("str").innerHTML="20+1.9";
		$("agi").innerHTML="21+2.5";
		$("int").innerHTML="15+1.8";
		
		$("skill_hot_1").innerHTML="C";
		$("skill_hot_2").innerHTML="R";
		$("skill_hot_3").innerHTML="E";
		$("skill_hot_4").innerHTML="V";
		
		$("skill_name_1").innerHTML="Poison Attack";
		$("skill_name_2").innerHTML="Nethertoxin";
		$("skill_name_3").innerHTML="Corrosive Skin";
		$("skill_name_4").innerHTML="Viper Strike";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="orange";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="clinkz")
	{
		$("clinkz").className='heroImg1';
		$("cheroImage2").src="./img/hero/clinkz.png";
		
		$("hero_name1").innerHTML="Bone Fletcherr";
		$("hero_name2").innerHTML="Clinkz";
		
		$("str").innerHTML="15+1.6";
		$("agi").innerHTML="22+3";
		$("int").innerHTML="16+1.55";
		
		$("skill_hot_1").innerHTML="T";
		$("skill_hot_2").innerHTML="R";
		$("skill_hot_3").innerHTML="W";
		$("skill_hot_4").innerHTML="E";
		
		$("skill_name_1").innerHTML="Strafe";
		$("skill_name_2").innerHTML="Searing Arrows";
		$("skill_name_3").innerHTML="Wind Walk";
		$("skill_name_4").innerHTML="Death Pact";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="orange";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="br")
	{
		$("br").className='heroImg1';
		$("cheroImage2").src="./img/hero/br.png";
		
		$("hero_name1").innerHTML="Broodmother";
		$("hero_name2").innerHTML="Black Arachnia";
		
		$("str").innerHTML="17+2.5";
		$("agi").innerHTML="18+2.2";
		$("int").innerHTML="18+2";
		
		$("skill_hot_1").innerHTML="W";
		$("skill_hot_2").innerHTML="B";
		$("skill_hot_3").innerHTML="P";
		$("skill_hot_4").innerHTML="T";
		
		$("skill_name_1").innerHTML="Spawn Spiderlings";
		$("skill_name_2").innerHTML="Spin Web";
		$("skill_name_3").innerHTML="Incapacitating Bite";
		$("skill_name_4").innerHTML="Insatiable Hunger";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="orange";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="nw")
	{
		$("nw").className='heroImg1';
		$("cheroImage2").src="./img/hero/nw.png";
		
		$("hero_name1").innerHTML="Nerubian Weaver";
		$("hero_name2").innerHTML="Anub'seran";
		
		$("str").innerHTML="15+1.5";
		$("agi").innerHTML="14+2.5";
		$("int").innerHTML="15+1.8";
		
		$("skill_hot_1").innerHTML="R";
		$("skill_hot_2").innerHTML="C";
		$("skill_hot_3").innerHTML="K";
		$("skill_hot_4").innerHTML="T";
		
		$("skill_name_1").innerHTML="The Swarm";
		$("skill_name_2").innerHTML="Shukuchi";
		$("skill_name_3").innerHTML="Geminate Attack";
		$("skill_name_4").innerHTML="Time Lapse";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="orange";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="spe")
	{
		$("spe").className='heroImg1';
		$("cheroImage2").src="./img/hero/spe.png";
		
		$("hero_name1").innerHTML="Spectre";
		$("hero_name2").innerHTML="Mercurial";
		
		$("str").innerHTML="19+2";
		$("agi").innerHTML="23+2.2";
		$("int").innerHTML="16+1.9";
		
		$("skill_hot_1").innerHTML="D";
		$("skill_hot_2").innerHTML="L";
		$("skill_hot_3").innerHTML="I";
		$("skill_hot_4").innerHTML="T";
		
		$("skill_name_1").innerHTML="Spectral Dagger";
		$("skill_name_2").innerHTML="Desolate";
		$("skill_name_3").innerHTML="Dispersion";
		$("skill_name_4").innerHTML="Haunt";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="orange";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="meepo")
	{
		$("meepo").className='heroImg1';
		$("cheroImage2").src="./img/hero/meepo.png";
		
		$("hero_name1").innerHTML="Geomancer";
		$("hero_name2").innerHTML="Meepo";
		
		$("str").innerHTML="23+1.6";
		$("agi").innerHTML="23+1.9";
		$("int").innerHTML="20+1.6";
		
		$("skill_hot_1").innerHTML="E";
		$("skill_hot_2").innerHTML="F";
		$("skill_hot_3").innerHTML="G";
		$("skill_hot_4").innerHTML="D";
		
		$("skill_name_1").innerHTML="Earthbind";
		$("skill_name_2").innerHTML="Poof";
		$("skill_name_3").innerHTML="Geostrike";
		$("skill_name_4").innerHTML="Divided We Stand";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="orange";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="na")
	{
		$("na").className='heroImg1';
		$("cheroImage2").src="./img/hero/na.png";
		
		$("hero_name1").innerHTML="Nerubian Assassin";
		$("hero_name2").innerHTML="Anub'arak";
		
		$("str").innerHTML="18+2";
		$("agi").innerHTML="19+2.2";
		$("int").innerHTML="18+2.1";
		
		$("skill_hot_1").innerHTML="E";
		$("skill_hot_2").innerHTML="R";
		$("skill_hot_3").innerHTML="D";
		$("skill_hot_4").innerHTML="V";
		
		$("skill_name_1").innerHTML="Impale";
		$("skill_name_2").innerHTML="Mana Burn";
		$("skill_name_3").innerHTML="Spiked Carapace";
		$("skill_name_4").innerHTML="Vendetta";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="orange";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="slark")
	{
		$("slark").className='heroImg1';
		$("cheroImage2").src="./img/hero/slark.png";
		
		$("hero_name1").innerHTML="Murloc Nightcrawler";
		$("hero_name2").innerHTML="Slark";
		
		$("str").innerHTML="21+1.8";
		$("agi").innerHTML="21+1.5";
		$("int").innerHTML="16+1.9";
		
		$("skill_hot_1").innerHTML="C";
		$("skill_hot_2").innerHTML="E";
		$("skill_hot_3").innerHTML="N";
		$("skill_hot_4").innerHTML="D";
		
		$("skill_name_1").innerHTML="Dark Pact";
		$("skill_name_2").innerHTML="Pounce";
		$("skill_name_3").innerHTML="Essence Shift";
		$("skill_name_4").innerHTML="Shadow Dance";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="orange";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="med")
	{
		$("med").className='heroImg1';
		$("cheroImage2").src="./img/hero/med.png";
		
		$("hero_name1").innerHTML="Beastmaster";
		$("hero_name2").innerHTML="Rexxar";
		
		$("hero_name1").innerHTML="Gorgon";
		$("hero_name2").innerHTML="Medusa";
		
		$("str").innerHTML="14+1.65";
		$("agi").innerHTML="20+2.5";
		$("int").innerHTML="19+1.85";
		
		$("skill_hot_1").innerHTML="T";
		$("skill_hot_2").innerHTML="C";
		$("skill_hot_3").innerHTML="E";
		$("skill_hot_4").innerHTML="G";
		
		$("skill_name_1").innerHTML="Split Shot";
		$("skill_name_2").innerHTML="Mystic Snake";
		$("skill_name_3").innerHTML="Mana Shield";
		$("skill_name_4").innerHTML="Stone Gaze";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="orange";
		$("main_int").style.borderColor="transparent";
	}
	else if(obj.alt=="tb")
	{
		$("tb").className='heroImg1';
		$("cheroImage2").src="./img/hero/tb.png";
		
		$("hero_name1").innerHTML="Soul Keeper";
		$("hero_name2").innerHTML="Terrorblade";
		
		$("str").innerHTML="15+1.4";
		$("agi").innerHTML="22+3.2";
		$("int").innerHTML="19+1.75";
		
		$("skill_hot_1").innerHTML="C";
		$("skill_hot_2").innerHTML="E";
		$("skill_hot_3").innerHTML="T";
		$("skill_hot_4").innerHTML="R";
		
		$("skill_name_1").innerHTML="Reflection";
		$("skill_name_2").innerHTML="Conjure Image";
		$("skill_name_3").innerHTML="Metamorphosis";
		$("skill_name_4").innerHTML="Sunder";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="orange";
		$("main_int").style.borderColor="transparent";
	}
//=======================INTELLIGENCE 1===========================
	else if(obj.alt=="cm")
	{
		$("cm").className='heroImg1';
		$("cheroImage2").src="./img/hero/cm.png";
		
		$("hero_name1").innerHTML="Crystal Maiden";
		$("hero_name2").innerHTML="Rylai Crestfall";
		
		$("str").innerHTML="16+1.7";
		$("agi").innerHTML="16+1.6";
		$("int").innerHTML="16+2.9";
		
		$("skill_hot_1").innerHTML="V";
		$("skill_hot_2").innerHTML="E";
		$("skill_hot_3").innerHTML="R";
		$("skill_hot_4").innerHTML="F";
		
		$("skill_name_1").innerHTML="Crystal Nova";
		$("skill_name_2").innerHTML="Frostbite";
		$("skill_name_3").innerHTML="Brilliance Aura";
		$("skill_name_4").innerHTML="Freezing Field";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="orange";
	}
	else if(obj.alt=="puck")
	{
		$("puck").className='heroImg1';
		$("cheroImage2").src="./img/hero/puck.png";
		
		$("hero_name1").innerHTML="Faerie Dragon";
		$("hero_name2").innerHTML="Puck";
		
		$("str").innerHTML="15+1.7";
		$("agi").innerHTML="22+1.7";
		$("int").innerHTML="25+2.4";
		
		$("skill_hot_1").innerHTML="R";
		$("skill_hot_2").innerHTML="W";
		$("skill_hot_3").innerHTML="F";
		$("skill_hot_4").innerHTML="C";
		
		$("skill_name_1").innerHTML="Illusory Orb";
		$("skill_name_2").innerHTML="Waning Rift";
		$("skill_name_3").innerHTML="Phase Shift";
		$("skill_name_4").innerHTML="Dream Coil";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="orange";
	}
	else if(obj.alt=="st")
	{
		$("st").className='heroImg1';
		$("cheroImage2").src="./img/hero/st.png";
		
		$("hero_name1").innerHTML="Storm Spirit";
		$("hero_name2").innerHTML="Raijin Thunderkeg";
		
		$("str").innerHTML="19+1.5";
		$("agi").innerHTML="22+1.8";
		$("int").innerHTML="23+2.6";
		
		$("skill_hot_1").innerHTML="R";
		$("skill_hot_2").innerHTML="E";
		$("skill_hot_3").innerHTML="V";
		$("skill_hot_4").innerHTML="G";
		
		$("skill_name_1").innerHTML="Static Remnant";
		$("skill_name_2").innerHTML="Electric Vortex";
		$("skill_name_3").innerHTML="Overload";
		$("skill_name_4").innerHTML="Ball Lightning";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="orange";
	}
	else if(obj.alt=="wr")
	{
		$("wr").className='heroImg1';
		$("cheroImage2").src="./img/hero/wr.png";
		
		$("hero_name1").innerHTML="Windrunner";
		$("hero_name2").innerHTML="Alleria";
		
		$("str").innerHTML="15+2.5";
		$("agi").innerHTML="17+1.4";
		$("int").innerHTML="22+2.6";
		
		$("skill_hot_1").innerHTML="E";
		$("skill_hot_2").innerHTML="R";
		$("skill_hot_3").innerHTML="W";
		$("skill_hot_4").innerHTML="F";
		
		$("skill_name_1").innerHTML="Shackleshot";
		$("skill_name_2").innerHTML="Powershot";
		$("skill_name_3").innerHTML="Windrunner";
		$("skill_name_4").innerHTML="Focus Fire";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="orange";
	}
	else if(obj.alt=="zeus")
	{
		$("zeus").className='heroImg1';
		$("cheroImage2").src="./img/hero/zeus.png";
		
		$("hero_name1").innerHTML="Lord of Olympus";
		$("hero_name2").innerHTML="Zeus";
		
		$("str").innerHTML="19+2.3";
		$("agi").innerHTML="11+1.2";
		$("int").innerHTML="20+2.7";
		
		$("skill_hot_1").innerHTML="C";
		$("skill_hot_2").innerHTML="G";
		$("skill_hot_3").innerHTML="F";
		$("skill_hot_4").innerHTML="W";
		
		$("skill_name_1").innerHTML="Arc Lightning";
		$("skill_name_2").innerHTML="Lightning Bolt";
		$("skill_name_3").innerHTML="Static Field";
		$("skill_name_4").innerHTML="Thundergod's Wrath";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="orange";
	}
	else if(obj.alt=="lina")
	{
		$("lina").className='heroImg1';
		$("cheroImage2").src="./img/hero/lina.png";
		
		$("hero_name1").innerHTML="Slayer";
		$("hero_name2").innerHTML="Lina Inverse";
		
		$("str").innerHTML="18+1.5";
		$("agi").innerHTML="16+1.5";
		$("int").innerHTML="27+3.2";
		
		$("skill_hot_1").innerHTML="D";
		$("skill_hot_2").innerHTML="T";
		$("skill_hot_3").innerHTML="F";
		$("skill_hot_4").innerHTML="G";
		
		$("skill_name_1").innerHTML="Dragon Slave";
		$("skill_name_2").innerHTML="Light Strike Array";
		$("skill_name_3").innerHTML="Fiery Soul";
		$("skill_name_4").innerHTML="Laguna Blade";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="orange";
	}
	else if(obj.alt=="ss")
	{
		$("ss").className='heroImg1';
		$("cheroImage2").src="./img/hero/ss.png";
		
		$("hero_name1").innerHTML="Shadow Shaman";
		$("hero_name2").innerHTML="Rhasta";
		
		$("str").innerHTML="19+1.6";
		$("agi").innerHTML="16+1.6";
		$("int").innerHTML="21+3";
		
		$("skill_hot_1").innerHTML="R";
		$("skill_hot_2").innerHTML="D";
		$("skill_hot_3").innerHTML="E";
		$("skill_hot_4").innerHTML="W";
		
		$("skill_name_1").innerHTML="Ether Shock";
		$("skill_name_2").innerHTML="Voodoo";
		$("skill_name_3").innerHTML="Shackles";
		$("skill_name_4").innerHTML="Mass Serpent Ward";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="orange";
	}
	else if(obj.alt=="tk")
	{
		$("tk").className='heroImg1';
		$("cheroImage2").src="./img/hero/tk.png";
		
		$("hero_name1").innerHTML="Tinker";
		$("hero_name2").innerHTML="Boush";
		
		$("str").innerHTML="17+2";
		$("agi").innerHTML="13+1.2";
		$("int").innerHTML="27+2.2";
		
		$("skill_hot_1").innerHTML="E";
		$("skill_hot_2").innerHTML="T";
		$("skill_hot_3").innerHTML="C";
		$("skill_hot_4").innerHTML="R";
		
		$("skill_name_1").innerHTML="Laser";
		$("skill_name_2").innerHTML="Heat Seeking Missile";
		$("skill_name_3").innerHTML="March of the Machines";
		$("skill_name_4").innerHTML="Rearm";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="orange";
	}
	else if(obj.alt=="fur")
	{
		$("fur").className='heroImg1';
		$("cheroImage2").src="./img/hero/fur.png";
		
		$("hero_name1").innerHTML="Prophet";
		$("hero_name2").innerHTML="Furion";
		
		$("str").innerHTML="19+1.8";
		$("agi").innerHTML="18+1.9";
		$("int").innerHTML="21+2.9";
		
		$("skill_hot_1").innerHTML="T";
		$("skill_hot_2").innerHTML="R";
		$("skill_hot_3").innerHTML="F";
		$("skill_hot_4").innerHTML="W";
		
		$("skill_name_1").innerHTML="Sprout";
		$("skill_name_2").innerHTML="Teleportation";
		$("skill_name_3").innerHTML="Force of Nature";
		$("skill_name_4").innerHTML="Wrath of Nature";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="orange";
	}
	else if(obj.alt=="ench")
	{
		$("ench").className='heroImg1';
		$("cheroImage2").src="./img/hero/ench.png";
		
		$("hero_name1").innerHTML="Enchantress";
		$("hero_name2").innerHTML="Aiushtha";
		
		$("str").innerHTML="16+1.9";
		$("agi").innerHTML="19+1.8";
		$("int").innerHTML="16+2.8";
		
		$("skill_hot_1").innerHTML="U";
		$("skill_hot_2").innerHTML="C";
		$("skill_hot_3").innerHTML="R";
		$("skill_hot_4").innerHTML="T";
		
		$("skill_name_1").innerHTML="Untouchable";
		$("skill_name_2").innerHTML="Enchant";
		$("skill_name_3").innerHTML="Nature's Attendants";
		$("skill_name_4").innerHTML="Impetus";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="orange";
	}
	else if(obj.alt=="thd")
	{
		$("thd").className='heroImg1';
		$("cheroImage2").src="./img/hero/thd.png";
		
		$("hero_name1").innerHTML="Twin Head Dragon";
		$("hero_name2").innerHTML="Jakiro";
		
		$("str").innerHTML="24+2.3";
		$("agi").innerHTML="10+1.2";
		$("int").innerHTML="28+2.8";
		
		$("skill_hot_1").innerHTML="D";
		$("skill_hot_2").innerHTML="T";
		$("skill_hot_3").innerHTML="Q";
		$("skill_hot_4").innerHTML="R";
		
		$("skill_name_1").innerHTML="Dual Breath";
		$("skill_name_2").innerHTML="Ice Path";
		$("skill_name_3").innerHTML="Liquid Fire";
		$("skill_name_4").innerHTML="Macropyre";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="orange";
	}
	else if(obj.alt=="chen")
	{
		$("chen").className='heroImg1';
		$("cheroImage2").src="./img/hero/chen.png";
		
		$("hero_name1").innerHTML="Holy Knight";
		$("hero_name2").innerHTML="Chen";
		
		$("str").innerHTML="20+1.5";
		$("agi").innerHTML="15+2.1";
		$("int").innerHTML="21+2.8";
		
		$("skill_hot_1").innerHTML="E";
		$("skill_hot_2").innerHTML="T";
		$("skill_hot_3").innerHTML="R";
		$("skill_hot_4").innerHTML="D";
		
		$("skill_name_1").innerHTML="Penitence";
		$("skill_name_2").innerHTML="Test of Faith";
		$("skill_name_3").innerHTML="Holy Persuasion";
		$("skill_name_4").innerHTML="Hand of God";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="orange";
	}
	else if(obj.alt=="sil")
	{
		$("sil").className='heroImg1';
		$("cheroImage2").src="./img/hero/sil.png";
		
		$("hero_name1").innerHTML="Silencer";
		$("hero_name2").innerHTML="Nortrom";
		
		$("str").innerHTML="17+2.2";
		$("agi").innerHTML="16+3";
		$("int").innerHTML="27+2.5";
		
		$("skill_hot_1").innerHTML="C";
		$("skill_hot_2").innerHTML="W";
		$("skill_hot_3").innerHTML="L";
		$("skill_hot_4").innerHTML="E";
		
		$("skill_name_1").innerHTML="Curse of the Silent";
		$("skill_name_2").innerHTML="Glaives of Wisdom";
		$("skill_name_3").innerHTML="Last Word";
		$("skill_name_4").innerHTML="Global Silence";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="orange";
	}
	else if(obj.alt=="om")
	{
		$("om").className='heroImg1';
		$("cheroImage2").src="./img/hero/om.png";
		
		$("hero_name1").innerHTML="Ogre Magi";
		$("hero_name2").innerHTML="Aggron Stonebreaker";
		
		$("str").innerHTML="23+3.2";
		$("agi").innerHTML="14+1.55";
		$("int").innerHTML="17+2.4";
		
		$("skill_hot_1").innerHTML="F";
		$("skill_hot_2").innerHTML="G";
		$("skill_hot_3").innerHTML="B";
		$("skill_hot_4").innerHTML="C";
		
		$("skill_name_1").innerHTML="Fireblast";
		$("skill_name_2").innerHTML="Ignite";
		$("skill_name_3").innerHTML="Bloodlust";
		$("skill_name_4").innerHTML="Multi Cast";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="orange";
	}
	else if(obj.alt=="rubbick")
	{
		$("rubbick").className='heroImg1';
		$("cheroImage2").src="./img/hero/rubbick.png";
		
		$("hero_name1").innerHTML="Grand Magus";
		$("hero_name2").innerHTML="Rubbick";
		
		$("str").innerHTML="19+1.5";
		$("agi").innerHTML="14+1.6";
		$("int").innerHTML="27+2.4";
		
		$("skill_hot_1").innerHTML="Z";
		$("skill_hot_2").innerHTML="X";
		$("skill_hot_3").innerHTML="N";
		$("skill_hot_4").innerHTML="Q";
		
		$("skill_name_1").innerHTML="Telekinesis";
		$("skill_name_2").innerHTML="Fade Bolt";
		$("skill_name_3").innerHTML="Null Field";
		$("skill_name_4").innerHTML="Spell Steal";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="orange";
	}
	else if(obj.alt=="dis")
	{
		$("dis").className='heroImg1';
		$("cheroImage2").src="./img/hero/dis.png";
		
		$("hero_name1").innerHTML="Disruptor";
		$("hero_name2").innerHTML="Thrall";
		
		$("str").innerHTML="19+1.9";
		$("agi").innerHTML="15+1.4";
		$("int").innerHTML="22+2.5";
		
		$("skill_hot_1").innerHTML="C";
		$("skill_hot_2").innerHTML="D";
		$("skill_hot_3").innerHTML="E";
		$("skill_hot_4").innerHTML="R";
		
		$("skill_name_1").innerHTML="Thunder Strike";
		$("skill_name_2").innerHTML="Glimpse";
		$("skill_name_3").innerHTML="Kinetic Field";
		$("skill_name_4").innerHTML="Static Storm";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="orange";
	}
	else if(obj.alt=="ktl")
	{
		$("ktl").className='heroImg1';
		$("cheroImage2").src="./img/hero/ktl.png";
		
		$("hero_name1").innerHTML="Keeper of the Light";
		$("hero_name2").innerHTML="Ezalor";
		
		$("str").innerHTML="14+1.8";
		$("agi").innerHTML="15+1.6";
		$("int").innerHTML="22+2.8";
		
		$("skill_hot_1").innerHTML="T";
		$("skill_hot_2").innerHTML="E";
		$("skill_hot_3").innerHTML="C";
		$("skill_hot_4").innerHTML="F";
		
		$("skill_name_1").innerHTML="Illuminate";
		$("skill_name_2").innerHTML="Mana Leak";
		$("skill_name_3").innerHTML="Chakra Magic";
		$("skill_name_4").innerHTML="Spirit Form";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="orange";
	}
	else if(obj.alt=="sm")
	{
		$("sm").className='heroImg1';
		$("cheroImage2").src="./img/hero/sm.png";
		
		$("hero_name1").innerHTML="Skywrath Mage";
		$("hero_name2").innerHTML="Dragonus";
		
		$("str").innerHTML="19+1.5";
		$("agi").innerHTML="18+0.8";
		$("int").innerHTML="27+3.6";
		
		$("skill_hot_1").innerHTML="C";
		$("skill_hot_2").innerHTML="T";
		$("skill_hot_3").innerHTML="R";
		$("skill_hot_4").innerHTML="E";
		
		$("skill_name_1").innerHTML="Arcane Bolt";
		$("skill_name_2").innerHTML="Concussive Shot";
		$("skill_name_3").innerHTML="Ancient Seal";
		$("skill_name_4").innerHTML="Mystic Flare";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="orange";
	}
	else if(obj.alt=="oracle")
	{
		$("oracle").className='heroImg1';
		$("cheroImage2").src="./img/hero/oracle.png";
		
		$("hero_name1").innerHTML="Oracle";
		$("hero_name2").innerHTML="Nerif";
		
		$("str").innerHTML="18+1.9";
		$("agi").innerHTML="15+1.7";
		$("int").innerHTML="23+2.9";
		
		$("skill_hot_1").innerHTML="T";
		$("skill_hot_2").innerHTML="F";
		$("skill_hot_3").innerHTML="E";
		$("skill_hot_4").innerHTML="R";
		
		$("skill_name_1").innerHTML="Fortune's End";
		$("skill_name_2").innerHTML="Fate's Edict";
		$("skill_name_3").innerHTML="Purifying Flames";
		$("skill_name_4").innerHTML="False Promise";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="orange";
	}
	else if(obj.alt=="tech")
	{
		$("tech").className='heroImg1';
		$("cheroImage2").src="./img/hero/tech.png";
		
		$("hero_name1").innerHTML="Goblin Techies";
		$("hero_name2").innerHTML="Squee Spleen & Spoon";
		
		$("str").innerHTML="18+1.9";
		$("agi").innerHTML="15+1.7";
		$("int").innerHTML="23+2.9";
		
		$("skill_hot_1").innerHTML="E";
		$("skill_hot_2").innerHTML="T";
		$("skill_hot_3").innerHTML="C";
		$("skill_hot_4").innerHTML="R";
		
		$("skill_name_1").innerHTML="Land Mines";
		$("skill_name_2").innerHTML="Stasis Trap";
		$("skill_name_3").innerHTML="Suicide Squad, Attack!";
		$("skill_name_4").innerHTML="Remote Mines";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="orange";
	}
//=======================INTELLIGENCE 2===========================
	else if(obj.alt=="bane")
	{
		$("bane").className='heroImg1';
		$("cheroImage2").src="./img/hero/bane.png";
		
		$("hero_name1").innerHTML="Bane Elemental";
		$("hero_name2").innerHTML="Atropos";
		
		$("str").innerHTML="22+2.1";
		$("agi").innerHTML="22+2.1";
		$("int").innerHTML="22+2.1";
		
		$("skill_hot_1").innerHTML="E";
		$("skill_hot_2").innerHTML="B";
		$("skill_hot_3").innerHTML="T";
		$("skill_hot_4").innerHTML="F";
		
		$("skill_name_1").innerHTML="Enfeeble";
		$("skill_name_2").innerHTML="Brain Sap";
		$("skill_name_3").innerHTML="Nightmare";
		$("skill_name_4").innerHTML="Fiend's Grip";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="orange";
	}
	else if(obj.alt=="lich")
	{
		$("lich").className='heroImg1';
		$("cheroImage2").src="./img/hero/lich.png";
		
		$("hero_name1").innerHTML="Lich";
		$("hero_name2").innerHTML="Kel'thuzad";
		
		$("str").innerHTML="18+1.55";
		$("agi").innerHTML="15+2";
		$("int").innerHTML="18+3.25";
		
		$("skill_hot_1").innerHTML="V";
		$("skill_hot_2").innerHTML="F";
		$("skill_hot_3").innerHTML="D";
		$("skill_hot_4").innerHTML="C";
		
		$("skill_name_1").innerHTML="Frost Nova";
		$("skill_name_2").innerHTML="Frost Armor";
		$("skill_name_3").innerHTML="Dark Ritual";
		$("skill_name_4").innerHTML="Chain Frost";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="orange";
	}
	else if(obj.alt=="lion")
	{
		$("lion").className='heroImg1';
		$("cheroImage2").src="./img/hero/lion.png";
		
		$("hero_name1").innerHTML="Demon Witch";
		$("hero_name2").innerHTML="Lion";
		
		$("str").innerHTML="16+1.7";
		$("agi").innerHTML="15+1.5";
		$("int").innerHTML="22+3";
		
		$("skill_hot_1").innerHTML="E";
		$("skill_hot_2").innerHTML="D";
		$("skill_hot_3").innerHTML="R";
		$("skill_hot_4").innerHTML="F";
		
		$("skill_name_1").innerHTML="Impale";
		$("skill_name_2").innerHTML="Voodoo";
		$("skill_name_3").innerHTML="Mana Drain";
		$("skill_name_4").innerHTML="Finger of Death";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="orange";
	}
	else if(obj.alt=="wd")
	{
		$("wd").className='heroImg1';
		$("cheroImage2").src="./img/hero/wd.png";
	
		$("hero_name1").innerHTML="Witch Doctor";
		$("hero_name2").innerHTML="Vol'Jin";
		
		$("str").innerHTML="16+1.8";
		$("agi").innerHTML="13+1.4";
		$("int").innerHTML="24+2.9";
		
		$("skill_hot_1").innerHTML="C";
		$("skill_hot_2").innerHTML="V";
		$("skill_hot_3").innerHTML="E";
		$("skill_hot_4").innerHTML="D";
		
		$("skill_name_1").innerHTML="Paralyzing Cask";
		$("skill_name_2").innerHTML="Voodoo Restoration";
		$("skill_name_3").innerHTML="Maledict";
		$("skill_name_4").innerHTML="Death Ward";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="orange";
	}
	else if(obj.alt=="em")
	{
		$("em").className='heroImg1';
		$("cheroImage2").src="./img/hero/em.png";
		
		$("hero_name1").innerHTML="Enigma";
		$("hero_name2").innerHTML="Darchrow";
		
		$("str").innerHTML="17+2.1";
		$("agi").innerHTML="14+1";
		$("int").innerHTML="20+3.4";
		
		$("skill_hot_1").innerHTML="W";
		$("skill_hot_2").innerHTML="D";
		$("skill_hot_3").innerHTML="B";
		$("skill_hot_4").innerHTML="R";
		
		$("skill_name_1").innerHTML="Malefice";
		$("skill_name_2").innerHTML="Demonic Conversion";
		$("skill_name_3").innerHTML="Midnight Pulse";
		$("skill_name_4").innerHTML="Black Hole";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="orange";
	}
	else if(obj.alt=="nec")
	{
		$("nec").className='heroImg1';
		$("cheroImage2").src="./img/hero/nec.png";
		
		$("hero_name1").innerHTML="Necrolyte";
		$("hero_name2").innerHTML="Rotund'jere";
		
		$("str").innerHTML="16+2.0";
		$("agi").innerHTML="15+1.7";
		$("int").innerHTML="22+2.5";
		
		$("skill_hot_1").innerHTML="D";
		$("skill_hot_2").innerHTML="T";
		$("skill_hot_3").innerHTML="I";
		$("skill_hot_4").innerHTML="R";
		
		$("skill_name_1").innerHTML="Death Pulse";
		$("skill_name_2").innerHTML="Heartstopper Aura";
		$("skill_name_3").innerHTML="Sadist";
		$("skill_name_4").innerHTML="Reaper's Scythe";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="orange";
	}
	else if(obj.alt=="wl")
	{
		$("wl").className='heroImg1';
		$("cheroImage2").src="./img/hero/wl.png";

		$("hero_name1").innerHTML="Warlock";
		$("hero_name2").innerHTML="Demnok Lannik";
		
		$("str").innerHTML="18+2.5";
		$("agi").innerHTML="10+1";
		$("int").innerHTML="24+2.7";
		
		$("skill_hot_1").innerHTML="F";
		$("skill_hot_2").innerHTML="W";
		$("skill_hot_3").innerHTML="E";
		$("skill_hot_4").innerHTML="R";
		
		$("skill_name_1").innerHTML="Fatal Bonds ";
		$("skill_name_2").innerHTML="Shadow Word";
		$("skill_name_3").innerHTML="Upheaval";
		$("skill_name_4").innerHTML="Rain of Chaos";		
			
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="orange";
	}
	else if(obj.alt=="qop")
	{
		$("qop").className='heroImg1';
		$("cheroImage2").src="./img/hero/qop.png";
		
		$("hero_name1").innerHTML="Queen of Pain";
		$("hero_name2").innerHTML="Akasha";
		
		$("str").innerHTML="16+1.7";
		$("agi").innerHTML="18+2";
		$("int").innerHTML="24+2.5";
		
		$("skill_hot_1").innerHTML="D";
		$("skill_hot_2").innerHTML="B";
		$("skill_hot_3").innerHTML="F";
		$("skill_hot_4").innerHTML="W";
		
		$("skill_name_1").innerHTML="Shadow Strike";
		$("skill_name_2").innerHTML="Blink";
		$("skill_name_3").innerHTML="Scream of Pain";
		$("skill_name_4").innerHTML="Sonic Wave";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="orange";
	}
	else if(obj.alt=="dp")
	{
		$("dp").className='heroImg1';
		$("cheroImage2").src="./img/hero/dp.png";
		
		$("hero_name1").innerHTML="Death Prophet";
		$("hero_name2").innerHTML="Krobelus";
		
		$("str").innerHTML="19+1.4";
		$("agi").innerHTML="14+1.4";
		$("int").innerHTML="20+3";
		
		$("skill_hot_1").innerHTML="R";
		$("skill_hot_2").innerHTML="E";
		$("skill_hot_3").innerHTML="C";
		$("skill_hot_4").innerHTML="X";
		
		$("skill_name_1").innerHTML="Carrion Swarm";
		$("skill_name_2").innerHTML="Silence";
		$("skill_name_3").innerHTML="Witchcraft";
		$("skill_name_4").innerHTML="Exorcism";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="orange";
	}
	else if(obj.alt=="pugna")
	{
		$("pugna").className='heroImg1';
		$("cheroImage2").src="./img/hero/pugna.png";
		
		$("hero_name1").innerHTML="Oblivion";
		$("hero_name2").innerHTML="Pugna";
		
		$("str").innerHTML="17+1.2";
		$("agi").innerHTML="16+1";
		$("int").innerHTML="26+4";
		
		$("skill_hot_1").innerHTML="B";
		$("skill_hot_2").innerHTML="C";
		$("skill_hot_3").innerHTML="W";
		$("skill_hot_4").innerHTML="D";
		
		$("skill_name_1").innerHTML="Nether Blast";
		$("skill_name_2").innerHTML="Decrepify";
		$("skill_name_3").innerHTML="Nether Ward";
		$("skill_name_4").innerHTML="Life Drain";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="orange";
	}
	else if(obj.alt=="dazzle")
	{
		$("dazzle").className='heroImg1';
		$("cheroImage2").src="./img/hero/dazzle.png";
		
		$("hero_name1").innerHTML="Shadow Priest";
		$("hero_name2").innerHTML="Dazzle";
		
		$("str").innerHTML="16+1.85";
		$("agi").innerHTML="21+1.7";
		$("int").innerHTML="27+3.4";
		
		$("skill_hot_1").innerHTML="T";
		$("skill_hot_2").innerHTML="G";
		$("skill_hot_3").innerHTML="D";
		$("skill_hot_4").innerHTML="W";
		
		$("skill_name_1").innerHTML="Poison Touch";
		$("skill_name_2").innerHTML="Shallow Grave";
		$("skill_name_3").innerHTML="Shadow Wave";
		$("skill_name_4").innerHTML="Weave";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="orange";
	}
	else if(obj.alt=="ts")
	{
		$("ts").className='heroImg1';
		$("cheroImage2").src="./img/hero/ts.png";
		
		$("hero_name1").innerHTML="Tormented Soul";
		$("hero_name2").innerHTML="Leshrac the Malicious";
		
		$("str").innerHTML="16+1.5";
		$("agi").innerHTML="23+1.7";
		$("int").innerHTML="26+3";
		
		$("skill_hot_1").innerHTML="T";
		$("skill_hot_2").innerHTML="C";
		$("skill_hot_3").innerHTML="G";
		$("skill_hot_4").innerHTML="V";
		
		$("skill_name_1").innerHTML="Split Earth";
		$("skill_name_2").innerHTML="Diabolic Edict";
		$("skill_name_3").innerHTML="Lightning Storm";
		$("skill_name_4").innerHTML="Pulse Nova";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="orange";
	}
	else if(obj.alt=="ds")
	{
		$("ds").className='heroImg1';
		$("cheroImage2").src="./img/hero/ds.png";
		
		$("hero_name1").innerHTML="Dark Seer";
		$("hero_name2").innerHTML="Ish'kafel";
		
		$("str").innerHTML="22+2.3";
		$("agi").innerHTML="12+1.2";
		$("int").innerHTML="29+2.7";
		
		$("skill_hot_1").innerHTML="C";
		$("skill_hot_2").innerHTML="E";
		$("skill_hot_3").innerHTML="R";
		$("skill_hot_4").innerHTML="W";
		
		$("skill_name_1").innerHTML="Vacuum";
		$("skill_name_2").innerHTML="Ion Shell";
		$("skill_name_3").innerHTML="Surge";
		$("skill_name_4").innerHTML="Wall of Replica";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="orange";
	}
	else if(obj.alt=="bat")
	{
		$("bat").className='heroImg1';
		$("cheroImage2").src="./img/hero/bat.png";
		
		$("hero_name1").innerHTML="Batrider";
		$("hero_name2").innerHTML="Jin'zakk";
		
		$("str").innerHTML="23+2.4";
		$("agi").innerHTML="15+1.5";
		$("int").innerHTML="25+2.5";
		
		$("skill_hot_1").innerHTML="C";
		$("skill_hot_2").innerHTML="R";
		$("skill_hot_3").innerHTML="E";
		$("skill_hot_4").innerHTML="F";
		
		$("skill_name_1").innerHTML="Sticky Napalm";
		$("skill_name_2").innerHTML="Flamebreak";
		$("skill_name_3").innerHTML="Firefly";
		$("skill_name_4").innerHTML="Flaming Lasso";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="orange";
	}
	else if(obj.alt=="aa")
	{
		$("aa").className='heroImg1';
		$("cheroImage2").src="./img/hero/aa.png";
		
		$("hero_name1").innerHTML="Ancient Apparition";
		$("hero_name2").innerHTML="Kaldr";
		
		$("str").innerHTML="18+1.4";
		$("agi").innerHTML="20+2.2";
		$("int").innerHTML="25+2.6";
		
		$("skill_hot_1").innerHTML="C";
		$("skill_hot_2").innerHTML="E";
		$("skill_hot_3").innerHTML="G";
		$("skill_hot_4").innerHTML="T";
		
		$("skill_name_1").innerHTML="Cold Feet";
		$("skill_name_2").innerHTML="Ice Vortex";
		$("skill_name_3").innerHTML="Chilling Touch";
		$("skill_name_4").innerHTML="Ice Blast";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="orange";
	}
	else if(obj.alt=="karl")
	{
		$("karl").className='heroImg1';
		$("cheroImage2").src="./img/hero/karl.png";
		
		$("hero_name1").innerHTML="Invoker";
		$("hero_name2").innerHTML="Kael";
		
		$("str").innerHTML="19+1.7";
		$("agi").innerHTML="20+1.9";
		$("int").innerHTML="22+2.5";
		
		$("skill_hot_1").innerHTML="Q";
		$("skill_hot_2").innerHTML="W";
		$("skill_hot_3").innerHTML="E";
		$("skill_hot_4").innerHTML="R";
		
		$("skill_name_1").innerHTML="Quas";
		$("skill_name_2").innerHTML="Wex";
		$("skill_name_3").innerHTML="Exort";
		$("skill_name_4").innerHTML="Invoke";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="orange";
	}
	else if(obj.alt=="od")
	{
		$("od").className='heroImg1';
		$("cheroImage2").src="./img/hero/od.png";
		
		$("hero_name1").innerHTML="Obsidian Destroyer";
		$("hero_name2").innerHTML="Harbinger";
		
		$("str").innerHTML="19+1.85";
		$("agi").innerHTML="24+2.0";
		$("int").innerHTML="26+3.3";
		
		$("skill_hot_1").innerHTML="R";
		$("skill_hot_2").innerHTML="T";
		$("skill_hot_3").innerHTML="E";
		$("skill_hot_4").innerHTML="C";
		
		$("skill_name_1").innerHTML="Arcane Orb";
		$("skill_name_2").innerHTML="Astral Imprisonment";
		$("skill_name_3").innerHTML="Essence Aura";
		$("skill_name_4").innerHTML="Sanity's Eclipse";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="orange";
	}
	else if(obj.alt=="sd")
	{
		$("sd").className='heroImg1';
		$("cheroImage2").src="./img/hero/sd.png";
		
		$("hero_name1").innerHTML="Shadow Demon";
		$("hero_name2").innerHTML="Eredar";
		
		$("str").innerHTML="16+1.5";
		$("agi").innerHTML="23+1.7";
		$("int").innerHTML="26+3";
		
		$("skill_hot_1").innerHTML="T";
		$("skill_hot_2").innerHTML="C";
		$("skill_hot_3").innerHTML="G";
		$("skill_hot_4").innerHTML="V";
		
		$("skill_name_1").innerHTML="Split Earth";
		$("skill_name_2").innerHTML="Diabolic Edict";
		$("skill_name_3").innerHTML="Lightning Storm";
		$("skill_name_4").innerHTML="Pulse Nova";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="orange";
	}
	else if(obj.alt=="vis")
	{
		$("vis").className='heroImg1';
		$("cheroImage2").src="./img/hero/vis.png";
		
		$("hero_name1").innerHTML="Necro'lic";
		$("hero_name2").innerHTML="Visage";
		
		$("str").innerHTML="22+2.4";
		$("agi").innerHTML="11+1.3";
		$("int").innerHTML="24+2.5";
		
		$("skill_hot_1").innerHTML="G";
		$("skill_hot_2").innerHTML="C";
		$("skill_hot_3").innerHTML="V";
		$("skill_hot_4").innerHTML="T";
		
		$("skill_name_1").innerHTML="Grave Chill";
		$("skill_name_2").innerHTML="Soul Assumption";
		$("skill_name_3").innerHTML="Gravekeeper's Cloak";
		$("skill_name_4").innerHTML="Summon Familiars";
		
		$("main_str").style.borderColor="transparent";
		$("main_agi").style.borderColor="transparent";
		$("main_int").style.borderColor="orange";
	}	
}


function unsetborder(obj)
{	
//=========================STRENGTH 1=============================
	if(obj.alt=="es")
		$("es").className='heroImg';
	else if(obj.alt=="sven")
		$("sven").className='heroImg';
	else if(obj.alt=="tiny")
		$("tiny").className='heroImg';
	else if(obj.alt=="coco")
		$("coco").className='heroImg';
	else if(obj.alt=="bm")
		$("bm").className='heroImg';
	else if(obj.alt=="dk")
		$("dk").className='heroImg';
	else if(obj.alt=="cg")
		$("cg").className='heroImg';
	else if(obj.alt=="ok")
		$("ok").className='heroImg';
	else if(obj.alt=="huskar")
		$("huskar").className='heroImg';
	else if(obj.alt=="ga")
		$("ga").className='heroImg';
	else if(obj.alt=="panda")
		$("panda").className='heroImg';
	else if(obj.alt=="tp")
		$("tp").className='heroImg';
	else if(obj.alt=="io")
		$("io").className='heroImg';
	else if(obj.alt=="cw")
		$("cw").className='heroImg';
	else if(obj.alt=="timber")
		$("timber").className='heroImg';
	else if(obj.alt=="bb")
		$("bb").className='heroImg';
	else if(obj.alt=="tc")
		$("tc").className='heroImg';
	else if(obj.alt=="tusk")
		$("tusk").className='heroImg';
	else if(obj.alt=="lc")
		$("lc").className='heroImg';
	else if(obj.alt=="earth")
		$("earth").className='heroImg';
	else if(obj.alt=="phoenix")
		$("phoenix").className='heroImg';
//=========================STRENGTH 2=============================
	else if(obj.alt=="axe")
		$("axe").className='heroImg';
	else if(obj.alt=="pudge")
		$("pudge").className='heroImg';
	else if(obj.alt=="sk")
		$("sk").className='heroImg';
	else if(obj.alt=="slardar")
		$("slardar").className='heroImg';
	else if(obj.alt=="th")
		$("th").className='heroImg';
	else if(obj.alt=="snk")
		$("snk").className='heroImg';
	else if(obj.alt=="naix")
		$("naix").className='heroImg';
	else if(obj.alt=="ns")
		$("ns").className='heroImg';
	else if(obj.alt=="doom")
		$("doom").className='heroImg';
	else if(obj.alt=="sb")
		$("sb").className='heroImg';
	else if(obj.alt=="lyc")
		$("lyc").className='heroImg';
	else if(obj.alt=="ck")
		$("ck").className='heroImg';
	else if(obj.alt=="undying")
		$("undying").className='heroImg';
	else if(obj.alt=="mag")
		$("mag").className='heroImg';
	else if(obj.alt=="abaddon")
		$("abaddon").className='heroImg';
//=========================AGILITY 1==============================
	else if(obj.alt=="am")
		$("am").className='heroImg';
	else if(obj.alt=="dr")
		$("dr").className='heroImg';
	else if(obj.alt=="jugg")
		$("jugg").className='heroImg';
	else if(obj.alt=="pom")
		$("pom").className='heroImg';
	else if(obj.alt=="mor")
		$("mor").className='heroImg';
	else if(obj.alt=="pl")
		$("pl").className='heroImg';
	else if(obj.alt=="vs")
		$("vs").className='heroImg';
	else if(obj.alt=="sa")
		$("sa").className='heroImg';
	else if(obj.alt=="sniper")
		$("sniper").className='heroImg';
	else if(obj.alt=="ta")
		$("ta").className='heroImg';
	else if(obj.alt=="luna")
		$("luna").className='heroImg';
	else if(obj.alt=="bh")
		$("bh").className='heroImg';
	else if(obj.alt=="ursa")
		$("ursa").className='heroImg';
	else if(obj.alt=="gyro")
		$("gyro").className='heroImg';
	else if(obj.alt=="ld")
		$("ld").className='heroImg';
	else if(obj.alt=="naga")
		$("naga").className='heroImg';
	else if(obj.alt=="troll")
		$("troll").className='heroImg';
	else if(obj.alt=="ember")
		$("ember").className='heroImg';
//=========================AGILITY 2==============================
	else if(obj.alt=="bs")
		$("bs").className='heroImg';
	else if(obj.alt=="sf")
		$("sf").className='heroImg';
	else if(obj.alt=="razor")
		$("razor").className='heroImg';
	else if(obj.alt=="veno")
		$("veno").className='heroImg';
	else if(obj.alt=="fv")
		$("fv").className='heroImg';
	else if(obj.alt=="pa")
		$("pa").className='heroImg';
	else if(obj.alt=="viper")
		$("viper").className='heroImg';
	else if(obj.alt=="clinkz")
		$("clinkz").className='heroImg';
	else if(obj.alt=="br")
		$("br").className='heroImg';
	else if(obj.alt=="nw")
		$("nw").className='heroImg';
	else if(obj.alt=="spe")
		$("spe").className='heroImg';
	else if(obj.alt=="meepo")
		$("meepo").className='heroImg';
	else if(obj.alt=="na")
		$("na").className='heroImg';
	else if(obj.alt=="slark")
		$("slark").className='heroImg';
	else if(obj.alt=="med")
		$("med").className='heroImg';
	else if(obj.alt=="tb")
		$("tb").className='heroImg';
//=======================INTELLIGENCE 1===========================
	else if(obj.alt=="cm")
		$("cm").className='heroImg';
	else if(obj.alt=="puck")
		$("puck").className='heroImg';
	else if(obj.alt=="st")
		$("st").className='heroImg';
	else if(obj.alt=="wr")
		$("wr").className='heroImg';
	else if(obj.alt=="zeus")
		$("zeus").className='heroImg';
	else if(obj.alt=="lina")
		$("lina").className='heroImg';
	else if(obj.alt=="ss")
		$("ss").className='heroImg';
	else if(obj.alt=="tk")
		$("tk").className='heroImg';
	else if(obj.alt=="fur")
		$("fur").className='heroImg';
	else if(obj.alt=="ench")
		$("ench").className='heroImg';
	else if(obj.alt=="thd")
		$("thd").className='heroImg';
	else if(obj.alt=="chen")
		$("chen").className='heroImg';
	else if(obj.alt=="sil")
		$("sil").className='heroImg';
	else if(obj.alt=="om")
		$("om").className='heroImg';
	else if(obj.alt=="rubbick")
		$("rubbick").className='heroImg';
	else if(obj.alt=="dis")
		$("dis").className='heroImg';
	else if(obj.alt=="ktl")
		$("ktl").className='heroImg';
	else if(obj.alt=="sm")
		$("sm").className='heroImg';
	else if(obj.alt=="oracle")
		$("oracle").className='heroImg';
	else if(obj.alt=="tech")
		$("tech").className='heroImg';
//=======================INTELLIGENCE 2===========================
	else if(obj.alt=="bane")
		$("bane").className='heroImg';
	else if(obj.alt=="lich")
		$("lich").className='heroImg';
	else if(obj.alt=="lion")
		$("lion").className='heroImg';
	else if(obj.alt=="wd")
		$("wd").className='heroImg';
	else if(obj.alt=="em")
		$("em").className='heroImg';
	else if(obj.alt=="nec")
		$("nec").className='heroImg';
	else if(obj.alt=="wl")
		$("wl").className='heroImg';
	else if(obj.alt=="qop")
		$("qop").className='heroImg';
	else if(obj.alt=="dp")
		$("dp").className='heroImg';
	else if(obj.alt=="pugna")
		$("pugna").className='heroImg';
	else if(obj.alt=="dazzle")
		$("dazzle").className='heroImg';
	else if(obj.alt=="ts")
		$("ts").className='heroImg';
	else if(obj.alt=="ds")
		$("ds").className='heroImg';
	else if(obj.alt=="bat")
		$("bat").className='heroImg';
	else if(obj.alt=="aa")
		$("aa").className='heroImg';
	else if(obj.alt=="karl")
		$("karl").className='heroImg';
	else if(obj.alt=="od")
		$("od").className='heroImg';
	else if(obj.alt=="sd")
		$("sd").className='heroImg';
	else if(obj.alt=="vis")
		$("vis").className='heroImg';
}

function $(id)
{
	return document.getElementById(id);
}