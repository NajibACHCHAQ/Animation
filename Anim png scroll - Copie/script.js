function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true ,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
  ./pexels-c-technical-6153453 (2160p)_000001.jpg
  ./pexels-c-technical-6153453 (2160p)_000002.jpg
  ./pexels-c-technical-6153453 (2160p)_000003.jpg
  ./pexels-c-technical-6153453 (2160p)_000004.jpg
  ./pexels-c-technical-6153453 (2160p)_000005.jpg
  ./pexels-c-technical-6153453 (2160p)_000006.jpg
  ./pexels-c-technical-6153453 (2160p)_000007.jpg
  ./pexels-c-technical-6153453 (2160p)_000008.jpg
  ./pexels-c-technical-6153453 (2160p)_000009.jpg
  ./pexels-c-technical-6153453 (2160p)_000010.jpg
  ./pexels-c-technical-6153453 (2160p)_000011.jpg
  ./pexels-c-technical-6153453 (2160p)_000012.jpg
  ./pexels-c-technical-6153453 (2160p)_000013.jpg
  ./pexels-c-technical-6153453 (2160p)_000014.jpg
  ./pexels-c-technical-6153453 (2160p)_000015.jpg
  ./pexels-c-technical-6153453 (2160p)_000016.jpg
  ./pexels-c-technical-6153453 (2160p)_000017.jpg
  ./pexels-c-technical-6153453 (2160p)_000018.jpg
  ./pexels-c-technical-6153453 (2160p)_000019.jpg
  ./pexels-c-technical-6153453 (2160p)_000020.jpg
  ./pexels-c-technical-6153453 (2160p)_000021.jpg
  ./pexels-c-technical-6153453 (2160p)_000022.jpg
  ./pexels-c-technical-6153453 (2160p)_000023.jpg
  ./pexels-c-technical-6153453 (2160p)_000024.jpg
  ./pexels-c-technical-6153453 (2160p)_000025.jpg
  ./pexels-c-technical-6153453 (2160p)_000026.jpg
  ./pexels-c-technical-6153453 (2160p)_000027.jpg
  ./pexels-c-technical-6153453 (2160p)_000028.jpg
  ./pexels-c-technical-6153453 (2160p)_000029.jpg
  ./pexels-c-technical-6153453 (2160p)_000030.jpg
  ./pexels-c-technical-6153453 (2160p)_000031.jpg
  ./pexels-c-technical-6153453 (2160p)_000032.jpg
  ./pexels-c-technical-6153453 (2160p)_000033.jpg
  ./pexels-c-technical-6153453 (2160p)_000034.jpg
  ./pexels-c-technical-6153453 (2160p)_000035.jpg
  ./pexels-c-technical-6153453 (2160p)_000036.jpg
  ./pexels-c-technical-6153453 (2160p)_000037.jpg
  ./pexels-c-technical-6153453 (2160p)_000038.jpg
  ./pexels-c-technical-6153453 (2160p)_000039.jpg
  ./pexels-c-technical-6153453 (2160p)_000040.jpg
  ./pexels-c-technical-6153453 (2160p)_000041.jpg
  ./pexels-c-technical-6153453 (2160p)_000042.jpg
  ./pexels-c-technical-6153453 (2160p)_000043.jpg
  ./pexels-c-technical-6153453 (2160p)_000044.jpg
  ./pexels-c-technical-6153453 (2160p)_000045.jpg
  ./pexels-c-technical-6153453 (2160p)_000046.jpg
  ./pexels-c-technical-6153453 (2160p)_000047.jpg
  ./pexels-c-technical-6153453 (2160p)_000048.jpg
  ./pexels-c-technical-6153453 (2160p)_000049.jpg
  ./pexels-c-technical-6153453 (2160p)_000050.jpg
  ./pexels-c-technical-6153453 (2160p)_000051.jpg
  ./pexels-c-technical-6153453 (2160p)_000052.jpg
  ./pexels-c-technical-6153453 (2160p)_000053.jpg
  ./pexels-c-technical-6153453 (2160p)_000054.jpg
  ./pexels-c-technical-6153453 (2160p)_000055.jpg
  ./pexels-c-technical-6153453 (2160p)_000056.jpg
  ./pexels-c-technical-6153453 (2160p)_000057.jpg
  ./pexels-c-technical-6153453 (2160p)_000058.jpg
  ./pexels-c-technical-6153453 (2160p)_000059.jpg
  ./pexels-c-technical-6153453 (2160p)_000060.jpg
  ./pexels-c-technical-6153453 (2160p)_000061.jpg
  ./pexels-c-technical-6153453 (2160p)_000062.jpg
  ./pexels-c-technical-6153453 (2160p)_000063.jpg
  ./pexels-c-technical-6153453 (2160p)_000064.jpg
  ./pexels-c-technical-6153453 (2160p)_000065.jpg
  ./pexels-c-technical-6153453 (2160p)_000066.jpg
  ./pexels-c-technical-6153453 (2160p)_000067.jpg
  ./pexels-c-technical-6153453 (2160p)_000068.jpg
  ./pexels-c-technical-6153453 (2160p)_000069.jpg
  ./pexels-c-technical-6153453 (2160p)_000070.jpg
  ./pexels-c-technical-6153453 (2160p)_000071.jpg
  ./pexels-c-technical-6153453 (2160p)_000072.jpg
  ./pexels-c-technical-6153453 (2160p)_000073.jpg
  ./pexels-c-technical-6153453 (2160p)_000074.jpg
  ./pexels-c-technical-6153453 (2160p)_000075.jpg
  ./pexels-c-technical-6153453 (2160p)_000076.jpg
  ./pexels-c-technical-6153453 (2160p)_000077.jpg
  ./pexels-c-technical-6153453 (2160p)_000078.jpg
  ./pexels-c-technical-6153453 (2160p)_000079.jpg
  ./pexels-c-technical-6153453 (2160p)_000080.jpg
  ./pexels-c-technical-6153453 (2160p)_000081.jpg
  ./pexels-c-technical-6153453 (2160p)_000082.jpg
  ./pexels-c-technical-6153453 (2160p)_000083.jpg
  ./pexels-c-technical-6153453 (2160p)_000084.jpg
  ./pexels-c-technical-6153453 (2160p)_000085.jpg
  ./pexels-c-technical-6153453 (2160p)_000086.jpg
  ./pexels-c-technical-6153453 (2160p)_000087.jpg
  ./pexels-c-technical-6153453 (2160p)_000088.jpg
  ./pexels-c-technical-6153453 (2160p)_000089.jpg
  ./pexels-c-technical-6153453 (2160p)_000090.jpg
  ./pexels-c-technical-6153453 (2160p)_000091.jpg
  ./pexels-c-technical-6153453 (2160p)_000092.jpg
  ./pexels-c-technical-6153453 (2160p)_000093.jpg
  ./pexels-c-technical-6153453 (2160p)_000094.jpg
  ./pexels-c-technical-6153453 (2160p)_000095.jpg
  ./pexels-c-technical-6153453 (2160p)_000096.jpg
  ./pexels-c-technical-6153453 (2160p)_000097.jpg
  ./pexels-c-technical-6153453 (2160p)_000098.jpg
  ./pexels-c-technical-6153453 (2160p)_000099.jpg
  ./pexels-c-technical-6153453 (2160p)_000100.jpg
  ./pexels-c-technical-6153453 (2160p)_000101.jpg
  ./pexels-c-technical-6153453 (2160p)_000102.jpg
  ./pexels-c-technical-6153453 (2160p)_000103.jpg
  ./pexels-c-technical-6153453 (2160p)_000104.jpg
  ./pexels-c-technical-6153453 (2160p)_000105.jpg
  ./pexels-c-technical-6153453 (2160p)_000106.jpg
  ./pexels-c-technical-6153453 (2160p)_000107.jpg
  ./pexels-c-technical-6153453 (2160p)_000108.jpg
  ./pexels-c-technical-6153453 (2160p)_000109.jpg
  ./pexels-c-technical-6153453 (2160p)_000110.jpg
  ./pexels-c-technical-6153453 (2160p)_000111.jpg
  ./pexels-c-technical-6153453 (2160p)_000112.jpg
  ./pexels-c-technical-6153453 (2160p)_000113.jpg
  ./pexels-c-technical-6153453 (2160p)_000114.jpg
  ./pexels-c-technical-6153453 (2160p)_000115.jpg
  ./pexels-c-technical-6153453 (2160p)_000116.jpg
  ./pexels-c-technical-6153453 (2160p)_000117.jpg
  ./pexels-c-technical-6153453 (2160p)_000118.jpg
  ./pexels-c-technical-6153453 (2160p)_000119.jpg
  ./pexels-c-technical-6153453 (2160p)_000120.jpg
  ./pexels-c-technical-6153453 (2160p)_000121.jpg
  ./pexels-c-technical-6153453 (2160p)_000122.jpg
  ./pexels-c-technical-6153453 (2160p)_000123.jpg
  ./pexels-c-technical-6153453 (2160p)_000124.jpg
  ./pexels-c-technical-6153453 (2160p)_000125.jpg
  ./pexels-c-technical-6153453 (2160p)_000126.jpg
  ./pexels-c-technical-6153453 (2160p)_000127.jpg
  ./pexels-c-technical-6153453 (2160p)_000128.jpg
  ./pexels-c-technical-6153453 (2160p)_000129.jpg
  ./pexels-c-technical-6153453 (2160p)_000130.jpg
  ./pexels-c-technical-6153453 (2160p)_000131.jpg
  ./pexels-c-technical-6153453 (2160p)_000132.jpg
  ./pexels-c-technical-6153453 (2160p)_000133.jpg
  ./pexels-c-technical-6153453 (2160p)_000134.jpg
  ./pexels-c-technical-6153453 (2160p)_000135.jpg
  ./pexels-c-technical-6153453 (2160p)_000136.jpg
  ./pexels-c-technical-6153453 (2160p)_000137.jpg
  ./pexels-c-technical-6153453 (2160p)_000138.jpg
  ./pexels-c-technical-6153453 (2160p)_000139.jpg
  ./pexels-c-technical-6153453 (2160p)_000140.jpg
  ./pexels-c-technical-6153453 (2160p)_000141.jpg
  ./pexels-c-technical-6153453 (2160p)_000142.jpg
  ./pexels-c-technical-6153453 (2160p)_000143.jpg
  ./pexels-c-technical-6153453 (2160p)_000144.jpg
  ./pexels-c-technical-6153453 (2160p)_000145.jpg
  ./pexels-c-technical-6153453 (2160p)_000146.jpg
  ./pexels-c-technical-6153453 (2160p)_000147.jpg
  ./pexels-c-technical-6153453 (2160p)_000148.jpg
  ./pexels-c-technical-6153453 (2160p)_000148.jpg
  ./pexels-c-technical-6153453 (2160p)_000149.jpg
  ./pexels-c-technical-6153453 (2160p)_000150.jpg
  ./pexels-c-technical-6153453 (2160p)_000151.jpg
  ./pexels-c-technical-6153453 (2160p)_000152.jpg
  ./pexels-c-technical-6153453 (2160p)_000153.jpg
  ./pexels-c-technical-6153453 (2160p)_000154.jpg
  ./pexels-c-technical-6153453 (2160p)_000155.jpg
  ./pexels-c-technical-6153453 (2160p)_000156.jpg
  ./pexels-c-technical-6153453 (2160p)_000157.jpg
  ./pexels-c-technical-6153453 (2160p)_000158.jpg
  ./pexels-c-technical-6153453 (2160p)_000159.jpg
  ./pexels-c-technical-6153453 (2160p)_000160.jpg
  ./pexels-c-technical-6153453 (2160p)_000161.jpg
  ./pexels-c-technical-6153453 (2160p)_000162.jpg
  ./pexels-c-technical-6153453 (2160p)_000163.jpg
  ./pexels-c-technical-6153453 (2160p)_000164.jpg
  ./pexels-c-technical-6153453 (2160p)_000165.jpg
  ./pexels-c-technical-6153453 (2160p)_000166.jpg
  ./pexels-c-technical-6153453 (2160p)_000167.jpg
./pexels-c-technical-6153453 (2160p)_000168.jpg
./pexels-c-technical-6153453 (2160p)_000169.jpg
./pexels-c-technical-6153453 (2160p)_000170.jpg
./pexels-c-technical-6153453 (2160p)_000171.jpg
./pexels-c-technical-6153453 (2160p)_000172.jpg
./pexels-c-technical-6153453 (2160p)_000173.jpg
./pexels-c-technical-6153453 (2160p)_000174.jpg
./pexels-c-technical-6153453 (2160p)_000175.jpg
./pexels-c-technical-6153453 (2160p)_000176.jpg
./pexels-c-technical-6153453 (2160p)_000177.jpg
./pexels-c-technical-6153453 (2160p)_000178.jpg
./pexels-c-technical-6153453 (2160p)_000179.jpg
./pexels-c-technical-6153453 (2160p)_000180.jpg
./pexels-c-technical-6153453 (2160p)_000181.jpg
./pexels-c-technical-6153453 (2160p)_000182.jpg
./pexels-c-technical-6153453 (2160p)_000183.jpg
./pexels-c-technical-6153453 (2160p)_000184.jpg
./pexels-c-technical-6153453 (2160p)_000185.jpg
./pexels-c-technical-6153453 (2160p)_000186.jpg
./pexels-c-technical-6153453 (2160p)_000187.jpg
./pexels-c-technical-6153453 (2160p)_000188.jpg
./pexels-c-technical-6153453 (2160p)_000189.jpg
./pexels-c-technical-6153453 (2160p)_000190.jpg
./pexels-c-technical-6153453 (2160p)_000191.jpg
./pexels-c-technical-6153453 (2160p)_000192.jpg
./pexels-c-technical-6153453 (2160p)_000193.jpg
./pexels-c-technical-6153453 (2160p)_000194.jpg
./pexels-c-technical-6153453 (2160p)_000195.jpg
./pexels-c-technical-6153453 (2160p)_000196.jpg
./pexels-c-technical-6153453 (2160p)_000197.jpg
./pexels-c-technical-6153453 (2160p)_000198.jpg
./pexels-c-technical-6153453 (2160p)_000199.jpg
./pexels-c-technical-6153453 (2160p)_000200.jpg
./pexels-c-technical-6153453 (2160p)_000201.jpg
./pexels-c-technical-6153453 (2160p)_000202.jpg
./pexels-c-technical-6153453 (2160p)_000203.jpg
./pexels-c-technical-6153453 (2160p)_000204.jpg
./pexels-c-technical-6153453 (2160p)_000205.jpg
./pexels-c-technical-6153453 (2160p)_000206.jpg
./pexels-c-technical-6153453 (2160p)_000207.jpg
./pexels-c-technical-6153453 (2160p)_000208.jpg
./pexels-c-technical-6153453 (2160p)_000209.jpg
./pexels-c-technical-6153453 (2160p)_000210.jpg
./pexels-c-technical-6153453 (2160p)_000211.jpg
./pexels-c-technical-6153453 (2160p)_000212.jpg
./pexels-c-technical-6153453 (2160p)_000213.jpg
./pexels-c-technical-6153453 (2160p)_000214.jpg
./pexels-c-technical-6153453 (2160p)_000215.jpg
./pexels-c-technical-6153453 (2160p)_000216.jpg
./pexels-c-technical-6153453 (2160p)_000217.jpg
./pexels-c-technical-6153453 (2160p)_000218.jpg
./pexels-c-technical-6153453 (2160p)_000219.jpg
./`;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});



gsap.to("#page1",{
  scrollTrigger:{
    trigger:`#page1`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page2",{
  scrollTrigger:{
    trigger:`#page2`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page3",{
  scrollTrigger:{
    trigger:`#page3`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})