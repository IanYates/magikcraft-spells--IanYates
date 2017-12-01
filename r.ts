const magik = magikcraft.io;

function r(t = 5) {
	const times = t * 1000 / 300;
    let n = times;

    magik.setTimeout(shield, 300);
    magik.dixit('magical shield');

    var me = magik.getSender();

    function shield(){
            magik.dixit('more shield', me.getName());

    }
}
