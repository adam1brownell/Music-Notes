$(document).ready(function () {
    
    var cNote = $("#cAudio"), dNote = $("#dAudio"), eNote = $("#eAudio");
    var fNote = $("#fAudio"), gNote = $("#gAudio"), aNote = $("#aAudio");
    var bNote = $("#bAudio");
    
    $("#c").mousedown(function () {
        cNote.load();
        cNote.trigger("play");
    });


    $("#d").mousedown(function () {
        dNote.load();
        dNote.trigger("play");
    });

    $("#e").mousedown(function () {
        eNote.load();
        eNote.trigger("play");
    });

    $("#f").mousedown(function () {
        fNote.load();
        fNote.trigger("play");
    });
    
    $("#g").mousedown(function () {
        gNote.load();
        gNote.trigger("play");
    });
    
    $("#a").mousedown(function () {
        aNote.load();
        aNote.trigger("play"); 
    });
    
    $("#b").mousedown(function () {
        bNote.load();
        bNote.trigger("play"); 
    });
    
});

