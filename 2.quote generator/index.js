function generate(){
    var obj={
        "― Albert Einstein":'"Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and its beauty"',
        "― Pierce Brown,Red Rising":'"Man cannot be freed by the same injustice that enslaved it."',
        "― Deepak Chopra":'"Sex is always about emotions. Good sex is about free emotions; bad sex is about blocked emotions."',
        "― Madeline Miller, The Song of Achilles":'"Bury us, and mark our names above. Let us be free."'
    }

    var authors=Object.keys(obj);
  


    
    var author=authors[Math.floor(Math.random()*authors.length)];
    

    
    var x=obj[author];
    document.getElementById("q").innerHTML=x;
    document.getElementById("a").innerHTML=author;
}

