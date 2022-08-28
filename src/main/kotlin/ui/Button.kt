package ui

import kotlinx.html.TagConsumer
import kotlinx.html.div
import kotlinx.html.js.onClickFunction
import kotlinx.html.span

fun TagConsumer<*>.Button(text: String, icon: String, onClick: () -> Unit) {
    div("row button") {
        onClickFunction = { onClick() }
        span("icon button-icon") { +icon }
        span("button-text") { +text }
    }
}