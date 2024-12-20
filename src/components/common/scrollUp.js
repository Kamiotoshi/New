export default function ScrollUp() {
    return(
        <div>
            <a href="#" class="scrollup">Scroll</a>

            <section id="color-panel" class="close-color-panel">
                <a class="panel-button gray2"><i class="fa fa-cog fa-spin fa-2x"></i></a>
                {/* <!-- Colors --> */}
                <div class="segment">
                    <h4 class="gray2 normal no-padding">Color Scheme</h4>
                    <a title="orange" class="switcher orange-bg"></a>
                    <a title="strong-blue" class="switcher strong-blue-bg"></a>
                    <a title="moderate-green" class="switcher moderate-green-bg"></a>
                    <a title="vivid-yellow" class="switcher vivid-yellow-bg"></a>
                </div>
            </section>
        </div>
    )
}