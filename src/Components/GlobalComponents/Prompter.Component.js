import React from 'react';
const imagesrc = '../../images/';


export default function prompter({errorMessage, successMessage, warningMessage, closeMessage}){
	if(errorMessage){
		return(
			<PrompterMessage message={ errorMessage } url={ 'UYQTizKZCt.jpg' } closeMessage={ closeMessage }></PrompterMessage>
		)
	}
	else if(successMessage){
		return(
			<PrompterMessage message={ successMessage } url={ 'successimage.jpg' }></PrompterMessage>
		)
	}
	else if(warningMessage){
		return(
			<PrompterMessage message={ warningMessage } url={ 'warningimage.jpg' }></PrompterMessage>
		)
	}
	else{
		return(null)
	}
}

function PrompterMessage(props){
	return(
		<div className="prompts w-100 h-100 flex-col center-align center-justify">
			<div className="flex-col center-align">
				<img src={ imagesrc+'clear.png' } className="sm-icon close-button" alt="close button" onClick={ ()=>props.closeMessage({type:'clearErrorMessage'}) } />
				<p className="mb-3">
					{ props.message }
				</p>
				<img alt={ props.url } className="auto-h" src={ imagesrc+props.url } />
			</div>
		</div>
	)
}