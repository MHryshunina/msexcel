//awMagicForm - Подсветка незаполненых полей в форме
//awMagicForm - Checking the form
//Copyright (c) 2013 Alex Shtanko alexshtanko@gmail.com
//VERSION 1.0

(function($){

jQuery.fn.awMagicForm = function(options){	

	var options = $.extend({
		formIdWrapper	:'', //Id класса оборачивающего форму в которой необходимо выполнить проверку на заполнение полей.
		checkClass		:'', // Указать класс в INPUT, для которого необходимо выполнять проверку на заполнение поля.
		errorClass		:'', // Указать класс который будет подствалсятся в результате незаполнения поля.
	}, options);
	
	var make = function(){
			// Подсветка формы:
			// Checking the form
			$('#' + options.formIdWrapper +' form').live('submit',Check);
			
			//При фокусе убираем выделение INPUT c пустым полем:
			//At focus, take away separation INPUT with empty field:
			$('#'+options.formIdWrapper+' form input, #'+options.formIdWrapper+' form textarea').focus(RemoveClass);
			
			function RemoveClass(){
				if($(this).hasClass(options.errorClass))
				{
					$(this).addClass(options.checkClass).removeClass(options.errorClass);	
				}
			}
			
                       //Поле input type="FILE"
                       //Проверяем на заполнение
                       //Если файл был добавлен в поле #ipt_file значит убираем errorClass из #ipt_file и #file_url
                       $('#'+options.formIdWrapper+' form input').change(function(){
                          if($('#ipt_file').val() !== ''){
                            $(this).removeClass(options.errorClass);  
                            $('#file_url').removeClass(options.errorClass);
                          }
                         
                          
                       });
                        
			function Check(Stop){
				
				$('#' + options.formIdWrapper + ' .' + options.checkClass + '[value=]').addClass(options.errorClass).removeClass(options.checkClass);
				
				var check = $('#' + options.formIdWrapper + ' .'+options.checkClass).size();
				var count_error = $('#' + options.formIdWrapper + ' .'+options.errorClass).size();

				if(count_error > 0)
				{
					return false;
				}
	
			}
	}
	
	return this.each(make); 

}
	
})(jQuery);