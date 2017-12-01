const magik = magikcraft.io;

function r(t = 5) {
	const times = t * 1000 / 300;
    let n = times;

    function shield(){
        n--;
        const location = magik.hic();
        const nearbyEntities = location.getWorld().getNearbyEntities(location, 8,8,8);
        nearbyEntities.forEach(entity=>toss(entity));
        if (n > 0) {
            magik.setTimeout(shield, 300);
        } else {
            magik.dixit('Sheild out!');
        }

    }
    
    magik.setTimeout(() => shield(), 300);
    magik.dixit('magical shield');

}

function toss(entity){
    if (entity.getName() == magik.getSender().getName()){
        return;
    }

    var Vector = Java.type('org.bukkit.util.Vector');
    entity.setVelocity(new Vector(2,2,2));
}
