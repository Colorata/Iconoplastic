package ui

import addToBars
import extensions.elementFromId
import kotlinx.browser.document
import kotlinx.html.TagConsumer
import kotlinx.html.div
import kotlinx.html.dom.append
import kotlinx.html.id
import kotlinx.html.js.onClickFunction
import kotlinx.html.span
import org.w3c.dom.HTMLInputElement
import removeFromBars
import selectedListStorage
import toSymbol

fun TagConsumer<*>.GridItem(item: Map.Entry<String, String>) {
    div("grid-item column" + if (selectedListStorage.any { it == item.key }) " active" else "") {
        id = "grid-item-${item.key}"
        onClickFunction = { _ ->
            if (selectedListStorage.any { it == item.key }) {
                selectedListStorage = selectedListStorage - item.key
                removeFromBars(item)
                document.getElementById("grid-item-${item.key}")?.className =
                    document.getElementById("grid-item-${item.key}")?.className?.replace(" active", "")
                        ?: ""
            } else {
                selectedListStorage = selectedListStorage + item.key
                document.getElementById("grid-item-${item.key}")?.className += " active"
                addToBars(item)
            }
        }
        span("icon") {
            +item.value.toSymbol()
        }
        span("grid-item-span") {
            +item.key.replace("_", " ").split(" ").joinToString { value ->
                value.replaceFirstChar { it.uppercaseChar() }
            }.replace(",", "")
        }
    }
}