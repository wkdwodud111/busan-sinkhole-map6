document.addEventListener("DOMContentLoaded", () => {
  const svgObject = document.getElementById("busan-map");

  svgObject.addEventListener("load", () => {
    const svgDoc = svgObject.contentDocument;

    // 마커 온오프 함수 정의
    window.toggleMarkers = function () {
      const markers = svgDoc.querySelectorAll('.sinkhole-marker');
      if (markers.length === 0) {
        alert("마커가 없습니다. SVG에 .sinkhole-marker 클래스가 있어야 합니다.");
        return;
      }

      markers.forEach(marker => {
        const isHidden = marker.style.display === 'none';
        marker.style.display = isHidden ? 'inline' : 'none';
      });
    };
    
    const namgu = svgDoc.getElementById("namgu");
    const haeundaegu = svgDoc.getElementById("haeundaegu");
    const dongnaegu = svgDoc.getElementById("dongnaegu");
    const yeonjegu = svgDoc.getElementById("yeonjegu");
    const suyeonggu = svgDoc.getElementById("suyeonggu");
    const geumjeonggu = svgDoc.getElementById("geumjeonggu");
    const bukgu = svgDoc.getElementById("bukgu");
    const gijanggun = svgDoc.getElementById("gijanggun");
    const busanjingu = svgDoc.getElementById("busanjingu");

    //사상구 const1 원래자리

    const donggu = svgDoc.getElementById("donggu");
    const seogu = svgDoc.getElementById("seogu");
    const junggu = svgDoc.getElementById("junggu");
    const yeongdogu = svgDoc.getElementById("yeongdogu");
    const gangseogu1 = svgDoc.getElementById("gangseogu1");
    const gangseogu2 = svgDoc.getElementById("gangseogu2");
    const gangseogu3 = svgDoc.getElementById("gangseogu3");


    const infoNamgu = document.getElementById("info-namgu");
    const infoHaeundae = document.getElementById("info-haeundaegu");
    const infoDongnae = document.getElementById("info-dongnaegu");
    const infoYeonje = document.getElementById("info-yeonjegu");
    const infoSuyeong = document.getElementById("info-suyeonggu");
    const infoGeumjeong = document.getElementById("info-geumjeonggu");
    const infoBukgu = document.getElementById("info-bukgu");
    const infoGijang = document.getElementById("info-gijanggun");
    const infoBusanjin = document.getElementById("info-busanjingu");
    const infoDonggu = document.getElementById("info-donggu");
    const infoSeogu = document.getElementById("info-seogu");
    const infoJung = document.getElementById("info-junggu");
    const infoYeongdo = document.getElementById("info-yeongdogu");
    const infoGangseo1 = document.getElementById("info-gangseogu1");
    const infoGangseo2 = document.getElementById("info-gangseogu2");
    const infoGangseo3 = document.getElementById("info-gangseogu3");


// 사상구 시작------------------------------------------------------------------
const sasanggu = svgDoc.getElementById("sasanggu");

// HTML에서 미리 정의된 인포박스들 가져오기
const infoSasanggu1 = document.getElementById("info-sasanggu1");
const infoSasanggu2 = document.getElementById("info-sasanggu2");
const infoSasanggu3 = document.getElementById("info-sasanggu3");
const infoSasanggu4 = document.getElementById("info-sasanggu4");

// 사상구에 마우스를 올렸을 때
if (sasanggu) {
  sasanggu.addEventListener("mouseenter", () => {
    sasanggu.setAttribute("fill", "#FF0000"); // 빨강

    // 사상구 인포박스들 보이게 하기
    infoSasanggu1.style.display = "block";
    infoSasanggu2.style.display = "block";
    infoSasanggu3.style.display = "block";
    infoSasanggu4.style.display = "block";

    // 다른 구들의 인포박스를 숨기기
    document.querySelectorAll(".info-box").forEach((box) => {
      if (![infoSasanggu1, infoSasanggu2, infoSasanggu3, infoSasanggu4].includes(box)) {
        box.style.display = "none";
      }
    });
  });

  // 마우스를 떼면 사상구 인포박스 숨기기
  sasanggu.addEventListener("mouseleave", () => {
    sasanggu.setAttribute("fill", "#FFFFFF"); // 원래 색상으로 돌아가기

    // 사상구 인포박스들 숨기기
    infoSasanggu1.style.display = "none";
    infoSasanggu2.style.display = "none";
    infoSasanggu3.style.display = "none";
    infoSasanggu4.style.display = "none";
  });
  }

    if (sasanggu) {
      sasanggu.addEventListener("click", () => {
        // 이미지 박스를 참조
        const imageBox = document.getElementById('image-box');

        // 클릭 시 이미지 경로 동적 설정
        const image1 = document.getElementById('image1');
        const image2 = document.getElementById('image2');

        // data-src에서 경로를 가져와 src에 설정
        image1.src = image1.getAttribute('data-src');
        image2.src = image2.getAttribute('data-src');

        // 이미지 박스가 보이는지 확인하고, 보이게/숨기게 설정
        if (imageBox.style.display === 'block') {
          // 이미지 박스를 숨김
          imageBox.style.display = 'none';
        } else {
          // 이미지 박스를 보이게 설정
          imageBox.style.display = 'block';
        }
        // 인포박스를 숨기기
        const infoBoxes = document.querySelectorAll(".info-box");
        infoBoxes.forEach((box) => {
          box.style.display = "none"; // 모든 인포박스 숨기기
        });
      });
    }

// 사상구 끝------------------------------------------------------------------

// 사하구 시작------------------------------------------------------------------
const sahagu = svgDoc.getElementById("sahagu");

// HTML에서 미리 정의된 인포박스들 가져오기
const infoSahagu1 = document.getElementById("info-sahagu1");
const infoSahagu2 = document.getElementById("info-sahagu2");
const infoSahagu3 = document.getElementById("info-sahagu3");
const infoSahagu4 = document.getElementById("info-sahagu4");

// 사상구에 마우스를 올렸을 때
if (sahagu) {
  sahagu.addEventListener("mouseenter", () => {
    sahagu.setAttribute("fill", "#FFA500"); // 노랑

    // 사상구 인포박스들 보이게 하기
    infoSahagu1.style.display = "block";
    infoSahagu2.style.display = "block";
    infoSahagu3.style.display = "block";
    infoSahagu4.style.display = "block";

    // 다른 구들의 인포박스를 숨기기
    document.querySelectorAll(".info-box").forEach((box) => {
      if (![infoSahagu1, infoSahagu2, infoSahagu3, infoSahagu4].includes(box)) {
        box.style.display = "none";
      }
    });
  });

  // 마우스를 떼면 사상구 인포박스 숨기기
  sahagu.addEventListener("mouseleave", () => {
    sahagu.setAttribute("fill", "#FFFFFF"); // 원래 색상으로 돌아가기

    // 사상구 인포박스들 숨기기
    infoSahagu1.style.display = "none";
    infoSahagu2.style.display = "none";
    infoSahagu3.style.display = "none";
    infoSahagu4.style.display = "none";
  });
  }
// 사하구 끝------------------------------------------------------------------

    if (namgu) {
      namgu.addEventListener("mouseenter", () => {
        namgu.setAttribute("fill", "#FFA500"); // 주황색
        infoNamgu.style.display = "block";
        infoHaeundae.style.display = "none";
      });

      namgu.addEventListener("mouseleave", () => {
        namgu.setAttribute("fill", "#FFFFFF");
        infoNamgu.style.display = "none";
      });
    }

    if (haeundaegu) {
      haeundaegu.addEventListener("mouseenter", () => {
        haeundaegu.setAttribute("fill", "#87CEFA"); // 하늘색
        infoHaeundae.style.display = "block";
        infoNamgu.style.display = "none";
      });

      haeundaegu.addEventListener("mouseleave", () => {
        haeundaegu.setAttribute("fill", "#FFFFFF");
        infoHaeundae.style.display = "none";
      });
    }
    if (dongnaegu) {
      dongnaegu.addEventListener("mouseenter", () => {
        dongnaegu.setAttribute("fill", "#FFB6C1"); // 연분홍색
        infoDongnae.style.display = "block";

        infoNamgu.style.display = "none";
        infoHaeundae.style.display = "none";
      });

      dongnaegu.addEventListener("mouseleave", () => {
        dongnaegu.setAttribute("fill", "#FFFFFF");
        infoDongnae.style.display = "none";
      });
    }
    if (yeonjegu) {
      yeonjegu.addEventListener("mouseenter", () => {
      yeonjegu.setAttribute("fill", "#90EE90"); // 연두색
      infoYeonje.style.display = "block";

      // 다른 구 정보 숨기기
      infoNamgu.style.display = "none";
      infoHaeundae.style.display = "none";
      infoDongnae.style.display = "none";
    });

    yeonjegu.addEventListener("mouseleave", () => {
      yeonjegu.setAttribute("fill", "#FFFFFF");
      infoYeonje.style.display = "none";
    });
  }
    if (suyeonggu) {
    suyeonggu.addEventListener("mouseenter", () => {
      suyeonggu.setAttribute("fill", "#ADD8E6"); // 밝은 파랑
      infoSuyeong.style.display = "block";

      // 다른 구 info-box 숨기기
      infoNamgu.style.display = "none";
      infoHaeundae.style.display = "none";
      infoDongnae.style.display = "none";
      infoYeonje.style.display = "none";
    });

    suyeonggu.addEventListener("mouseleave", () => {
      suyeonggu.setAttribute("fill", "#FFFFFF");
      infoSuyeong.style.display = "none";
    });
  }
    if (geumjeonggu) {
    geumjeonggu.addEventListener("mouseenter", () => {
      geumjeonggu.setAttribute("fill", "#FFDAB9"); // 복숭아색
      infoGeumjeong.style.display = "block";

      // 다른 구 info-box 숨기기
      infoNamgu.style.display = "none";
      infoHaeundae.style.display = "none";
      infoDongnae.style.display = "none";
      infoYeonje.style.display = "none";
      infoSuyeong.style.display = "none";
    });

    geumjeonggu.addEventListener("mouseleave", () => {
      geumjeonggu.setAttribute("fill", "#FFFFFF");
      infoGeumjeong.style.display = "none";
    });
  }
    if (bukgu) {
    bukgu.addEventListener("mouseenter", () => {
      bukgu.setAttribute("fill", "#E6E6FA"); // 연보라색
      infoBukgu.style.display = "block";

      // 다른 구 info-box 숨기기
      infoNamgu.style.display = "none";
      infoHaeundae.style.display = "none";
      infoDongnae.style.display = "none";
      infoYeonje.style.display = "none";
      infoSuyeong.style.display = "none";
      infoGeumjeong.style.display = "none";
    });

    bukgu.addEventListener("mouseleave", () => {
      bukgu.setAttribute("fill", "#FFFFFF");
      infoBukgu.style.display = "none";
    });
  }
    if (gijanggun) {
    gijanggun.addEventListener("mouseenter", () => {
      gijanggun.setAttribute("fill", "#FFE4B5"); // 밀크티색
      infoGijang.style.display = "block";

      // 다른 구군 info-box 숨기기
      infoNamgu.style.display = "none";
      infoHaeundae.style.display = "none";
      infoDongnae.style.display = "none";
      infoYeonje.style.display = "none";
      infoSuyeong.style.display = "none";
      infoGeumjeong.style.display = "none";
      infoBukgu.style.display = "none";
    });

    gijanggun.addEventListener("mouseleave", () => {
      gijanggun.setAttribute("fill", "#FFFFFF");
      infoGijang.style.display = "none";
    });
  }
    if (busanjingu) {
    busanjingu.addEventListener("mouseenter", () => {
      busanjingu.setAttribute("fill", "#F08080"); // 연한 살구색
      infoBusanjin.style.display = "block";

      // 다른 구/군 info-box 숨기기
      infoNamgu.style.display = "none";
      infoHaeundae.style.display = "none";
      infoDongnae.style.display = "none";
      infoYeonje.style.display = "none";
      infoSuyeong.style.display = "none";
      infoGeumjeong.style.display = "none";
      infoBukgu.style.display = "none";
      infoGijang.style.display = "none";
    });

    busanjingu.addEventListener("mouseleave", () => {
      busanjingu.setAttribute("fill", "#FFFFFF");
      infoBusanjin.style.display = "none";
    });
  }

    if (donggu) {
    donggu.addEventListener("mouseenter", () => {
      donggu.setAttribute("fill", "#FFEFD5"); // 파파야색
      infoDonggu.style.display = "block";

      // 다른 구/군 info-box 숨기기
      infoNamgu.style.display = "none";
      infoHaeundae.style.display = "none";
      infoDongnae.style.display = "none";
      infoYeonje.style.display = "none";
      infoSuyeong.style.display = "none";
      infoGeumjeong.style.display = "none";
      infoBukgu.style.display = "none";
      infoGijang.style.display = "none";
      infoBusanjin.style.display = "none";
      infoSasang.style.display = "none";
    });

    donggu.addEventListener("mouseleave", () => {
      donggu.setAttribute("fill", "#FFFFFF");
      infoDonggu.style.display = "none";
    });
  }
    if (seogu) {
    seogu.addEventListener("mouseenter", () => {
      seogu.setAttribute("fill", "#FAFAD2"); // 밝은 노랑
      infoSeogu.style.display = "block";

      // 다른 info-box 숨기기
      infoNamgu.style.display = "none";
      infoHaeundae.style.display = "none";
      infoDongnae.style.display = "none";
      infoYeonje.style.display = "none";
      infoSuyeong.style.display = "none";
      infoGeumjeong.style.display = "none";
      infoBukgu.style.display = "none";
      infoGijang.style.display = "none";
      infoBusanjin.style.display = "none";
      infoSasang.style.display = "none";
      infoDonggu.style.display = "none";
    });

    seogu.addEventListener("mouseleave", () => {
      seogu.setAttribute("fill", "#FFFFFF");
      infoSeogu.style.display = "none";
    });
  }
  
    if (junggu) {
    junggu.addEventListener("mouseenter", () => {
      junggu.setAttribute("fill", "#D8BFD8"); // 연보라
      infoJung.style.display = "block";

      // 다른 info-box 숨기기
      infoNamgu.style.display = "none";
      infoHaeundae.style.display = "none";
      infoDongnae.style.display = "none";
      infoYeonje.style.display = "none";
      infoSuyeong.style.display = "none";
      infoGeumjeong.style.display = "none";
      infoBukgu.style.display = "none";
      infoGijang.style.display = "none";
      infoBusanjin.style.display = "none";
      infoSasang.style.display = "none";
      infoDonggu.style.display = "none";
      infoSeogu.style.display = "none";
      infoSaha.style.display = "none";
    });

    junggu.addEventListener("mouseleave", () => {
      junggu.setAttribute("fill", "#FFFFFF");
      infoJung.style.display = "none";
    });
  }
    if (yeongdogu) {
    yeongdogu.addEventListener("mouseenter", () => {
      yeongdogu.setAttribute("fill", "#C0E8D5"); // 연청녹
      infoYeongdo.style.display = "block";

      // 다른 info-box 숨기기
      infoNamgu.style.display = "none";
      infoHaeundae.style.display = "none";
      infoDongnae.style.display = "none";
      infoYeonje.style.display = "none";
      infoSuyeong.style.display = "none";
      infoGeumjeong.style.display = "none";
      infoBukgu.style.display = "none";
      infoGijang.style.display = "none";
      infoBusanjin.style.display = "none";
      infoSasang.style.display = "none";
      infoDonggu.style.display = "none";
      infoSeogu.style.display = "none";
      infoSaha.style.display = "none";
      infoJung.style.display = "none";
    });

    yeongdogu.addEventListener("mouseleave", () => {
      yeongdogu.setAttribute("fill", "#FFFFFF");
      infoYeongdo.style.display = "none";
    });
  }
    if (gangseogu1) {
    gangseogu1.addEventListener("mouseenter", () => {
      gangseogu1.setAttribute("fill", "#CCFFCC"); // 연녹색
      infoGangseo1.style.display = "block";

      // 다른 info-box 숨기기
      infoNamgu.style.display = "none";
      infoHaeundae.style.display = "none";
      infoDongnae.style.display = "none";
      infoYeonje.style.display = "none";
      infoSuyeong.style.display = "none";
      infoGeumjeong.style.display = "none";
      infoBukgu.style.display = "none";
      infoGijang.style.display = "none";
      infoBusanjin.style.display = "none";
      infoSasang.style.display = "none";
      infoDonggu.style.display = "none";
      infoSeogu.style.display = "none";
      infoSaha.style.display = "none";
      infoJung.style.display = "none";
      infoYeongdo.style.display = "none";
      infoGangseo.style.display = "none";
      infoGangseo2 && (infoGangseo2.style.display = "none");
    });

    gangseogu1.addEventListener("mouseleave", () => {
      gangseogu1.setAttribute("fill", "#FFFFFF");
      infoGangseo1.style.display = "none";
    });
  }
    if (gangseogu2) {
    gangseogu2.addEventListener("mouseenter", () => {
      gangseogu2.setAttribute("fill", "#CCFFCC"); // 연녹색
      infoGangseo2.style.display = "block";

      // 다른 info-box 숨기기
      infoNamgu.style.display = "none";
      infoHaeundae.style.display = "none";
      infoDongnae.style.display = "none";
      infoYeonje.style.display = "none";
      infoSuyeong.style.display = "none";
      infoGeumjeong.style.display = "none";
      infoBukgu.style.display = "none";
      infoGijang.style.display = "none";
      infoBusanjin.style.display = "none";
      infoSasang.style.display = "none";
      infoDonggu.style.display = "none";
      infoSeogu.style.display = "none";
      infoSaha.style.display = "none";
      infoJung.style.display = "none";
      infoYeongdo.style.display = "none";
      infoGangseo1 && (infoGangseo1.style.display = "none");
    });

    gangseogu2.addEventListener("mouseleave", () => {
      gangseogu2.setAttribute("fill", "#FFFFFF");
      infoGangseo2.style.display = "none";
    });
  }
  if (gangseogu3) {
    gangseogu3.addEventListener("mouseenter", () => {
      gangseogu3.setAttribute("fill", "#CCFFCC"); // 연녹색
      infoGangseo3.style.display = "block";

      // 다른 info-box 숨기기
      infoNamgu.style.display = "none";
      infoHaeundae.style.display = "none";
      infoDongnae.style.display = "none";
      infoYeonje.style.display = "none";
      infoSuyeong.style.display = "none";
      infoGeumjeong.style.display = "none";
      infoBukgu.style.display = "none";
      infoGijang.style.display = "none";
      infoBusanjin.style.display = "none";
      infoSasang.style.display = "none";
      infoDonggu.style.display = "none";
      infoSeogu.style.display = "none";
      infoSaha.style.display = "none";
      infoJung.style.display = "none";
      infoYeongdo.style.display = "none";
      infoGangseo1 && (infoGangseo1.style.display = "none");
    });

    gangseogu3.addEventListener("mouseleave", () => {
      gangseogu3.setAttribute("fill", "#FFFFFF");
      infoGangseo3.style.display = "none";
    });
  }
  });
});

    