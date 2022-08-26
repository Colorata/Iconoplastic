package ui

import kotlinx.html.TagConsumer
import kotlinx.html.div
import kotlinx.html.id
import kotlinx.html.span
import toSymbol

fun TagConsumer<*>.SelectedIcon(item: Map.Entry<String, String>, prefix: String = "") {
    div("row row-start fill-max-width") {
        id = "${prefix}selected-item-${item.key}"
        span("icon") {
            +item.value.toSymbol()
        }
        span {
            +item.key.replace("_", " ").split(" ").joinToString { value ->
                value.replaceFirstChar { it.uppercaseChar() }
            }.replace(",", "")
        }
    }
}