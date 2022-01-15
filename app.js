const app = angular.module('HangmanGame',[]);

app.controller('ctrl', $scope => {
        
    $scope.wrongLettersSelected = [];
	$scope.correctLettersSelected = [];
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

    const newHangmanGame = () => {
        $scope.wrongLettersSelected = [];
        $scope.correctLettersSelected = [];
        $scope.guesses = 6;
        $scope.displayWord = '';

        selectedWord = randomWord();
        console.log(selectedWord);
    }

    newHangmanGame();
     
});