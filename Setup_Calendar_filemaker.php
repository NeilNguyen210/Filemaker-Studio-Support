function NewTask(date, callbackScriptName) {
			const param = {
				date: date,
			};
			FileMaker.PerformScript(callbackScriptName, JSON.stringify(param))
		}
		function ShowTask(id, focus, callbackScriptName) {
			const param = {
				id: id,
				focus: focus,
			};
			FileMaker.PerformScript(callbackScriptName, JSON.stringify(param))
		}
		function UpdateTask(id,start,end,allDay,focus, callbackScriptName) {
			const param = {
				id: id,
				start: start,
				end: end,
				allDay: allDay,
				focus: focus,
			};
			FileMaker.PerformScript(callbackScriptName, JSON.stringify(param))
		}
