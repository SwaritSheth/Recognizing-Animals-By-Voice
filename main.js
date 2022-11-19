function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/uIe5_saF4/', modelReady);
}

function modelReady(){
  classifier.classify( gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('dog1') 
    img1 = document.getElementById('lion1')
    img2 = document.getElementById('crow1')
    img3 = document.getElementById('cat1')

    
    if (results[0].label == "Clap") {
        img.src = 'https://upload.wikimedia.org/wikipedia/en/4/45/DJ_Dog.gif';
        img1.src = 'lion.jpg';
        img2.src = 'crow.jpg';
        img3.src = 'cat.jpg';
      } else if (results[0].label == "Bell") {
        img.src = 'dog.jpg';
        img1.src = 'https://media2.giphy.com/media/OqFpgF7bet1sRoCmpb/giphy.gif';
        img2.src = 'crow.jpg';
        img3.src = 'cat.jpg';
      } else if (results[0].label == "Snapping") {
        img.src = 'dog.jpg';
        img1.src = 'lion.jpg';
        img2.src = 'https://media.tenor.com/KQwLOWUDW-EAAAAC/crow-bird.gif';
        img3.src = 'cat.jpg';
      }else{
        img.src =  'dog.jpg';
        img1.src = 'lion.jpg';
        img2.src = 'crow.jpg';
        img3.src = 'https://media.tenor.com/N0aZdbie0N8AAAAM/cute-cute-cat.gif';
      }
    }
  }