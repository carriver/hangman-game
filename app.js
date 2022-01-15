const app = angular.module('HangmanGame',[]);

app.controller('ctrl',['$scope','$timeout', function($scope, $timeout) {
        
    $scope.wrongLettersSubmitted = [];
	$scope.correctLettersSubmitted = [];
    $scope.guesses = 6;
	$scope.displayWord = '';
	$scope.input = {
		letter: ''
	};

    const words = ['rat','cat'];

    const randomWord = () => {
		const index = Math.floor(Math.random()*words.length);
		return words[index];
    }

    const selectedWord = randomWord();

    const newHangmanGame = () => {
        $scope.wrongLettersSubmitted = [];
        $scope.correctLettersSubmitted = [];
        $scope.guesses = 6;
        $scope.displayWord = selectedWord.split('').reduce((acc, val) => acc.concat('*'), '');
    }
    
    $scope.letterSubmitted = () => {
        for (let index = 0; index < $scope.wrongLettersSubmitted.length; index++) {
            if ($scope.wrongLettersSubmitted[index].toUpperCase()
                == $scope.input.letter.toUpperCase()){
                $scope.input.letter = '';
                return;
            }           
        }

        for (let index = 0; index < $scope.correctLettersSubmitted.length; index++) {
            if ($scope.correctLettersSubmitted[index].toUpperCase()
                == $scope.input.letter.toUpperCase()){
                $scope.input.letter = '';
                return;
            }           
        }

        let correct = false;
        for (let index = 0; index < selectedWord.length; index++) {
            if (selectedWord[index].toUpperCase() == $scope.input.letter.toUpperCase()) {
                $scope.displayWord = 
                $scope.displayWord.slice(0,index)
                +$scope.input.letter.toUpperCase()
                +$scope.displayWord.slice(index+1);
                correct = true;
            }            
        }

        if (correct) {
			$scope.correctLettersSubmitted.push($scope.input.letter.toUpperCase());
		} else {
			$scope.guesses--;
			$scope.wrongLettersSubmitted.push($scope.input.letter.toUpperCase());
		}
        
        $scope.input.letter='';

        if($scope.guesses == 0) {
            alert('You lost!');
            $timeout(function() {
                newHangmanGame();
            },500);
        }

        if($scope.displayWord.indexOf("*") == -1) {
            alert('You won!');
            $timeout(function() {
                newHangmanGame();
            },500);
        }
    }

    newHangmanGame();
     
}]);