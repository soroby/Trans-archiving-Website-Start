document.addEventListener('DOMContentLoaded', () => {
    const communityList = document.getElementById( 'community-list');

    // Example data fetching
    fetch (' communities.json')
        •then (response => response. json ())
         •then (data => {
            data. forEach (community →> {
                 const communityDiv = document.createElement ('div');
                    communityDiv.classList.add( 'community');
                    communityDiv.innerHTML ='<h3>${community.name}</h3>
                                            <div class"media">
                                        ‹div class="media">
                                        ${community.images.map(img => 'img src = "${img}" alt = "Community Image">').join('')}
                                        ${community.texts.map(txt => '<p>${txt}</p>').join('')}
                                        ${community.sounds.map(sound => '
                                                <div class="audio-controls">
                                                    <audio controls>
                                                    <source src"${sound}" type ="audio/mpeg">
                                                    Your browser does not support the video element.
                                                    </audio>
                                                    <div>
                                                    ' ).join('')}
                                                    <div>
                                                    ';
                                                    communityList.appendChild(communityDiv);
                                                });
                                             })
                                            .catch(error => console.error('Error fetching data:', error));
                                        });