export default {
  locale: 'es',
  messages: {
    siteTitle: 'Canal Sin Filtro',
    switchLanguage: 'Cambiar Idioma',
    twitterMessage: 'Estamos en Twitter',
    by: 'Por',
    addVideo: 'Agregar Video',
    deleteVideo: 'Eliminar Video',
    createNewVideo: 'Crear Nuevo Video',
    authorName: 'Author\'s Name',
    postTitle: 'Video Title',
    postContent: 'Video Content',
    submit: 'Submit',
    comment: `user {name} {value, plural,
    	  =0 {does not have any comments}
    	  =1 {has # comment}
    	  other {has # comments}
    	}`,
    HTMLComment: `user <b style='font-weight: bold'>{name} </b> {value, plural,
    	  =0 {does not have <i style='font-style: italic'>any</i> comments}
    	  =1 {has <i style='font-style: italic'>#</i> comment}
    	  other {has <i style='font-style: italic'>#</i> comments}
    	}`,
    nestedDateComment: `user {name} {value, plural,
    	  =0 {does not have any comments}
    	  =1 {has # comment}
    	  other {has # comments}
    	} as of {date}`,
  },
};
