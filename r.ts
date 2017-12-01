const magik = magikcraft.io;

function r(t = 5) {
	const times = t * 1000 / 300;
    let n = times;

    magik.setTimeout(shield, 300);
    magik.dixit('magical shield');

    function shield(){
        n--;
        const location = magik.hic();
        const nearbyEntities = location.getWorld().strikeLightning(location);
    }
}
