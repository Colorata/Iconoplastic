import kotlinx.browser.document
import kotlinx.browser.window
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.html.*
import kotlinx.html.dom.append
import kotlinx.html.js.onClickFunction

fun main() {
    window.onload = {
        document.body?.append {
            style {
            }
            sayHello()
        }
        document.head?.append {
            link(
                "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200",
                rel = "stylesheet"
            )
        }
    }
}

fun TagConsumer<*>.sayHello() {

    div("row") {
        div("column") {
            /*div("row") {
                span {
                    +"Text"
                    id = "text-id"
                }
                span("material-symbols-outlined") {
                    +"expand_less"
                }
                button {
                    onClickFunction = {
                        document.getElementById("text-id")?.textContent += "text"
                    }
                    +"Text"
                }
            }*/
            var count = 0
            val selectedList = mutableMapOf<Int, String>()
            CoroutineScope(Dispatchers.Default).launch {
                val response = Api().getCodepoints()
                count = response.size
                var globalIndex = 0
                val grid = document.getElementById("grid-icons")
                response.forEach {
                    grid?.append {
                        val index = globalIndex
                        div("grid-item column") {
                            id = "grid-item-$index"
                            onClickFunction = { event ->
                                event.preventDefault()
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
            div("grid") {
                id = "grid-icons"
                /*repeat(count) {
                div("grid-item") {
                    span("icon") {
                        id = "grid-item-$it"
                        +"..."
                    }
                }
            }*/
            }
        }
        /*div("sticky picker-card") {
            div("column") {
                id = "selected-icons"
            }
        }*/
    }
}

fun String.toSymbol() = Char(this.toInt(16)).toString()