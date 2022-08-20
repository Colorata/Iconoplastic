import kotlinx.browser.document
import kotlinx.browser.window
import kotlinx.html.div
import kotlinx.html.dom.append
import kotlinx.html.id
import kotlinx.html.js.onClickFunction
import kotlinx.html.span
import org.w3c.dom.events.Event
import org.w3c.dom.events.EventListener

fun isSystemInDarkTheme() =
    window.matchMedia("(prefers-color-scheme: dark)").matches

fun Map<String, String>.applyToDocument(selectedList: MutableMap<Int, String>) {
    var globalIndex = 0
    val grid = document.getElementById("grid-icons")
    forEach {
        grid?.append {
            val index = globalIndex
            div("grid-item column") {
                id = "grid-item-$index"
                onClickFunction = { _ ->
                    if (selectedList.containsKey(index)) {
                        selectedList.remove(index)
                        selectedList.forEach {
                            console.log(it.key, ", ", it.value)
                        }
                        document.getElementById("selected-item-$index")?.remove()
                        document.getElementById("grid-item-$index")?.className =
                            document.getElementById("grid-item-$index")?.className?.replace(" active", "")
                                ?: ""
                    } else {
                        selectedList[index] = it.value
                        selectedList.forEach {
                            console.log(it.key, ", ", it.value)
                        }
                        document.getElementById("grid-item-$index")?.className += " active"
                        document.getElementById("selected-icons")?.append {
                            div("row") {
                                id = "selected-item-$index"
                                span("icon") {
                                    +it.value.toSymbol()
                                }
                                span {
                                    +it.key.replace("_", " ").split(" ").joinToString { value ->
                                        value.replaceFirstChar { it.uppercaseChar() }
                                    }.replace(",", "")
                                }
                            }
                        }
                    }
                }
                span("icon") {
                    +it.value.toSymbol()
                }
                span {
                    +it.key.replace("_", " ").split(" ").joinToString { value ->
                        value.replaceFirstChar { it.uppercaseChar() }
                    }.replace(",", "")
                }
            }
        }
        globalIndex += 1
    }
}