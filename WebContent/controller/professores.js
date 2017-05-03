var professoresModulo = angular.module("professoresModulo",[]);

professoresModulo.controller("professoresController", function ($scope) {
	$scope.professores = [
		{codigo: 1,nome: 'Paulo J. Cagol',email: 'cagoljosepaulo@gmail.com',fone: '46 999999999'},
		{codigo: 2,nome: 'Maristela Veigas',email: 'maristela@gmail.com',fone: '46 999999999'},
		{codigo: 3,nome: 'Joao Pedro Lazaro',email: 'joao@gmail.com',fone: '46 999999999'},
		{codigo: 4,nome: 'Vilmar Roberto Brito',email: 'vilmar@gmail.com',fone: '46 999999999'},
		{codigo: 5,nome: 'Sergio Ramos',email: 'sergio@gmail.com',fone: '46 999999999'}
	];

	$scope.selecionaProfessor = function (professoreSelecionado) {
		$scope.professor = professoreSelecionado;
	}
	$scope.limpar = function () {
		$scope.professor = "";
	}
	$scope.salvar = function (){
		$scope.professores.push($scope.professor);
		$scope.limpar();
	}

	$scope.excluir = function (){
		$scope.professores.splice($scope.professores.indexOf($scope.professor),1);
		$scope.limpar();
	}
});