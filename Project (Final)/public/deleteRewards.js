function deleteRewards(id){
    $.ajax({
        url: '/rewards/' + id,
        type: 'DELETE',
        success: function(result){
            window.location.reload(true);
        }
    })
};
