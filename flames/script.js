console.log("FLAMES script loaded ❤️");

const meanings = {
    F: {
        title: "💛 Friends",
        msg: "A beautiful friendship is the beginning of every strong relationship."
    },
    L: {
        title: "❤️ Love",
        msg: "Love is in the air! Your names ended with LOVE."
    },
    A: {
        title: "😍 Attraction",
        msg: "There is a strong attraction between these two names."
    },
    M: {
        title: "💍 Marriage",
        msg: "According to FLAMES, marriage is the result!"
    },
    E: {
        title: "😤 Enemies",
        msg: "Oops! FLAMES says enemies. Remember—this is only for fun!"
    },
    S: {
        title: "🤗 Siblings",
        msg: "FLAMES says siblings. It's just a fun game!"
    }
};

function calculateFlames() {

    let name1 = document.getElementById("name1").value
        .toLowerCase()
        .replace(/\s/g, "");

    let name2 = document.getElementById("name2").value
        .toLowerCase()
        .replace(/\s/g, "");

    if (name1 === "" || name2 === "") {
        alert("Please enter both names ❤️");
        return;
    }

    let arr1 = name1.split("");
    let arr2 = name2.split("");

    for (let i = 0; i < arr1.length; i++) {
        let index = arr2.indexOf(arr1[i]);
        if (index !== -1) {
            arr1[i] = "";
            arr2[index] = "";
        }
    }

    let count =
        arr1.join("").length +
        arr2.join("").length;

    let flames = ["F", "L", "A", "M", "E", "S"];
    let pos = 0;

    while (flames.length > 1) {
        pos = (pos + count - 1) % flames.length;
        flames.splice(pos, 1);
    }

    let result = meanings[flames[0]];

    const resultBox = document.getElementById("result");
    const msg = document.getElementById("message");

    resultBox.classList.remove("show");

    setTimeout(() => {

        resultBox.innerHTML = result.title;
        msg.innerHTML = result.msg;

        resultBox.classList.add("show");

    }, 200);
}

function playAgain() {

    document.getElementById("name1").value = "";
    document.getElementById("name2").value = "";

    document.getElementById("result").innerHTML = "❤️ Waiting...";
    document.getElementById("message").innerHTML = "Enter two names above.";

}