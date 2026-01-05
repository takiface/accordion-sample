//すべてのタイトル要素を取得
const titles = document.querySelectorAll('.accordion-title');

//イベントの登録
titles.forEach(title => {
    title.addEventListener('click', () => {
        const content = title.nextElementSibling; //子要素を取得

        //開いている場合は、閉じる
        closeOthers(title);

        toggleIcon(title);//アイコン切り替え
        toggleAccordion(content);//開閉アニメーション
    })
})

//アイコンの切り替え用
function toggleIcon(title){
    title.classList.toggle('active');
}

//開閉の切り替え
function toggleAccordion(content){
    //開閉の切り替え
    if(content.style.maxHeight){
        //空いていたら閉じる
        content.style.maxHeight = null;
    }else{
        //閉じていたら開ける
        content.style.maxHeight = content.scrollHeight + "px";
    }
}

//他の項目を閉じる
function closeOthers(currntTitle){
    titles.forEach(title => {
        if(title !== currntTitle){
            title.classList.remove('active');
            const content = title.nextElementSibling;
            content.style.maxHeight = null;
        }
    })
}
