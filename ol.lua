Writer = pandoc.scaffolding.Writer

Writer.Inline.Str = function(str)
  return str.text
end

Writer.Block.Para = function(para)
  return "<p>\n"..Writer.Inlines(para.content).."\n</p>\n"
end

Writer.Block.OrderedList = function (element)
  local buffer=""
  print("now entering OrderedList")
  print("here is element.content: ", element.content)
  for i, item in ipairs(element.content) do
    print("entering i list")
    print(i, item)
    for j, jtem in ipairs(item) do
      if jtem and jtem.t == 'OrderedList' then
        print("it's a list!")
        print(j, jtem)
        buffer = buffer..Writer.Block.OrderedList(jtem)
      elseif jtem and jtem.t == 'Para' then
        print("it's a paragraph!")
        print(j, jtem)
        -- it's a statement! (or an introduction but I'll deal with that manually)
        buffer = buffer.."<statement>\n"
        buffer = buffer..Writer.Block.Para(jtem)
        buffer = buffer.."</statement>\n"
      end
    end
  end
  return "<task>\n"..buffer.."\n</task>\n"
end
